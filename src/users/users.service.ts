import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userModel: typeof User,
    private readonly roleService:RolesService
  ) { }

  async create(createUserDto: CreateUserDto) {

    const newUser = await this.userModel.create(createUserDto)

    return
  }

  findAll() {
    return this.userModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
