import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from '../users/dto/create-user.dto';

import * as bcrypt from "bcrypt"
import { User } from '../users/models/user.model';
import { JwtService } from '@nestjs/jwt';

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

}