import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './models/user.model';
import { RolesService } from '../roles/roles.service';
import { Role } from '../roles/models/role.model';
import { AddRoleDto } from './dto/add-role.dto';
import { ActivateUserDto } from './dto/activate-user.dto';

@Injectable()
export class UsersService {

  constructor(
    @InjectModel(User) private userModel: typeof User,
    @InjectModel(Role) private roleModel: typeof Role,
    private readonly roleService: RolesService
  ) { }

  async create(createUserDto: CreateUserDto) {

    const newUser = await this.userModel.create(createUserDto)
    const role = await this.roleService.findRoleByValue(createUserDto.value)

    const role2 = await this.roleModel.findOne({
      where: { value: createUserDto.value.toUpperCase() }
    })

    if (!role) {
      throw new NotFoundException("Role not found")
    }
    if (!role2) {
      throw new NotFoundException("Role not found")
    }


    await newUser.$set("roles", [role.id]);
    // await newUser.$set("roles", [role2.id]);

    await newUser.save()
    newUser.roles = [role]

    // newUser.roles = [role2]

    return newUser
  }

  async adddRole(addRoleDto: AddRoleDto) {
    const user = await this.userModel.findByPk(addRoleDto.userId)
    const role = await this.roleService.findRoleByValue(addRoleDto.value)

    if (role && user) {
      await user.$add("roles", role.id)

      const updatedUser = await this.userModel.findByPk(addRoleDto.userId, { include: { all: true } })

      return updatedUser

    }

    throw new NotFoundException("User or Role Not Found")

  }

  async removeRole(addRoleDto: AddRoleDto) {
    const user = await this.userModel.findByPk(addRoleDto.userId)
    const role = await this.roleService.findRoleByValue(addRoleDto.value)

    if (role && user) {
      await user.$remove("roles", role.id)

      const updatedUser = await this.userModel.findByPk(addRoleDto.userId, { include: { all: true } })

      return updatedUser

    }

    throw new NotFoundException("User or Role Not Found")

  }

  findUserByEmail(email: string): Promise<User | null> {
    return this.userModel.findOne({
      where: { email }, include: {
        model: Role,
        attributes: ["value"],
        through: { attributes: [] }
      }
    })
  }

  async activateUser(activateUserDto: ActivateUserDto) {

    const user = await this.userModel.findByPk(activateUserDto.userId)

    if (user) {
      user.is_active = true
      await user.save()
      return user
    }

    throw new NotFoundException("User Not Found")
  
  }
  async deActivateUser(deActivateUser: ActivateUserDto) {

    const user = await this.userModel.findByPk(deActivateUser.userId)

    if (user) {
      user.is_active = false
      await user.save()
      return user
    }

    throw new NotFoundException("User Not Found")
  
  }

  findAll() {
    return this.userModel.findAll({ include: { all: true } })
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
