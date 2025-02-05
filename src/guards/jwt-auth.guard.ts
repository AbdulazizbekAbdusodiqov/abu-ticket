import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";


@Injectable()
export class JwtAuthGuard implements CanActivate {

    constructor(
        private readonly jwtService: JwtService
    ) { }

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
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
            // console.log(user);

        } catch (error) {
            // console.log(error);
            
            throw new UnauthorizedException({
                message: `token verification token, ${error.message}`
            })
        }

        req.user = user
        // console.log(req);
        
        //logic
        return true
    }
}