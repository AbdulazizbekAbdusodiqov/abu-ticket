import { CanActivate, ExecutionContext, ForbiddenException, Injectable, UnauthorizedException } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";
import { ROLES_KEY } from "../decorators/roles-auth-decorator";


@Injectable()
export class RolesGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService,
        private readonly reflectot: Reflector
    ) { }

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {

        const requiredRoles = this.reflectot.getAllAndOverride<string[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()]
        )
        if (!requiredRoles) {
            return true
        }

        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization
        if (!authHeader) {
            throw new UnauthorizedException({
                message: "headerda token berilmagan"
            })
        }
        const [bearer, token] = authHeader.split(" ")
        if (bearer != 'Bearer' || !token) {
            throw new UnauthorizedException({
                message: "Bearer token to'g'ri kelmadi"
            })
        }
        let user: any;
        try {

            user = this.jwtService.verify(token)

        } catch (error) {
            // console.log(error);

            throw new UnauthorizedException({
                message: `token verification token, ${error.message}`
            })
        }

        req.user = user

        const permission = user.roles.some((role: any) => {
            console.log(role);
            
            return requiredRoles.includes(role.value)
        })
        console.log(permission);
        
        if (!permission) {
            throw new ForbiddenException({
                message: "Sizga ruxsat berilmagan"
            })
        }

        return true
    }
}