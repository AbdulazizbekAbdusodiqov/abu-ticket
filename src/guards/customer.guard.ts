
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authorization = req.headers.authorization

    if (!authorization) {
      throw new UnauthorizedException()
    }
    console.log(authorization);

    const [bearer, token] = authorization.split(' ')
    if (bearer != 'Bearer' || !token) {
      throw new UnauthorizedException()
    }

    let admin: any;
    try {
      admin = this.jwtService.verify(token)
    } catch (error) {
      console.log("xaton 3");
      
      throw new UnauthorizedException()
    }
    if(admin.role != 'customer'){
      throw new UnauthorizedException()
    }
    console.log(admin);

    req.admin = admin
    
    return true
  }
}
