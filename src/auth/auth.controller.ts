import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
  ) { }


  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto) {
    return this.authService.signUp(createUserDto)
  }
}
