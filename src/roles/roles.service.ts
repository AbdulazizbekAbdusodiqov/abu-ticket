import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Role } from './models/role.model';

@Injectable()
export class RolesService {

  constructor(
    @InjectModel(Role) private roleModel: typeof Role
  ) { }

  create(createRoleDto: CreateRoleDto) {
    return this.roleModel.create({ ...createRoleDto, value: createRoleDto.value.toUpperCase() })
  }

  findAll() {
    return this.roleModel.findAll()
  }

  findOne(id: number) {
    return this.roleModel.findByPk(id)
  }

  findRoleByValue(value: string) {
    return this.roleModel.findOne({ where: { value: value.toUpperCase() } })
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {

    const role = await this.roleModel.findByPk(id)
    if (!role?.description) {
      return "not found"
    }
    await role.update(updateRoleDto)
    return { message: "updated" }
  }

  remove(id: number) {
    return this.roleModel.destroy({ where: { id } })
  }

}
