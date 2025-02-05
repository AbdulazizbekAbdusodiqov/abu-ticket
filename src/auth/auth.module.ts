import { forwardRef, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    forwardRef(()=>UsersModule),
    JwtModule.register({
      global: true,
      secret: "1111judakuchlisecretkey",
      signOptions: { expiresIn: '15h' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
