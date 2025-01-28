import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';

@Injectable()
export class AdminService {
  constructor(@InjectModel(Admin) private adminModel: typeof Admin) {}

  create(createAdminDto: CreateAdminDto) {
    return this.adminModel.create(createAdminDto);
  }

  findAll() {
    return this.adminModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.adminModel.findByPk(id);
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
   return this.adminModel.update(updateAdminDto, {
     where: { id },
     returning: true,
   });
  }

  remove(id: number) {
    return this.adminModel.destroy({ where: { id } });
  }
}
