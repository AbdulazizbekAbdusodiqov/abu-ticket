import { BadRequestException, ForbiddenException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

import * as bcrypt from "bcrypt"
import { User } from '../users/models/user.model';
import { JwtService } from '@nestjs/jwt';
import { SignInDto } from './dto/sign_in.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService
    ) { }

    async signUp(createUserDto: CreateUserDto) {

        const candidate = await this.userService.findUserByEmail(createUserDto.email)

        if (candidate) {
            throw new BadRequestException("already exists")
        }

        const hashed_password = bcrypt.hashSync(createUserDto.password, 7)
        createUserDto.password = hashed_password
        const newUser = await this.userService.create(createUserDto)

        return this.generateToken(newUser)
    }
    private async generateToken(user: User) {
        const payload = {
            id: user.id,
            email: user.email,
            roles: user.roles
        }
        return { token: this.jwtService.sign(payload) }
    }

    async signIn(signInDto: SignInDto) {
        const user = await this.userService.findUserByEmail(signInDto.email)

        if (!user) {
            throw new UnauthorizedException("Invalid Email or Password")
        }
        const isValidPassword = await bcrypt.compare(signInDto.password, user.password)
        if (!isValidPassword) {
            throw new UnauthorizedException("Invalid Email or Password")
        }

        // console.log(user.roles);
        
        for (const role of user.roles) {
            if (role.value == signInDto.value.toUpperCase()) {
                return this.generateToken(user)
            }
        }

        throw new ForbiddenException()
    }

}