
import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerGuard implements CanActivate {
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

    let customer: any;
    try {
      customer = this.jwtService.verify(token)
    } catch (error) {      
      throw new UnauthorizedException()
    }
    if(customer.role != 'customer'){
      throw new UnauthorizedException()
    }
    console.log(customer);

    req.customer = customer
    
    return true
  }
}
