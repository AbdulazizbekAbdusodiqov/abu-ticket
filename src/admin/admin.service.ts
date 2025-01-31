import { Injectable } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Admin } from './model/admin.model';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from "bcrypt"

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(Admin) private adminModel: typeof Admin,
    private jwtService: JwtService
  ) { }

  async create(createAdminDto: CreateAdminDto) {
    
    const oldAdmin = await this.adminModel.findOne({where:{email:createAdminDto.email}})
    if(oldAdmin){
      return {message: "admin already exists"}
    }
    
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7)

    const admin = await this.adminModel.create({...createAdminDto, hashed_password});

    const tokens = await this.generateToken(admin)

    admin.hashed_refresh_token = tokens.refreshToken
    await admin.save()

    return {message:"admin created", admin, access_token:tokens.accessToken}

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
    })[1][0]
  }

  remove(id: number) {
    return this.adminModel.destroy({ where: { id } });
  }
  private async generateToken(admin: Admin) {
    const payload = {
      id: admin.id,
      email: admin.email,
      role: "admin",
      is_creator: admin.is_creator
    }
    return {
      accessToken: this.jwtService.sign(payload),
      refreshToken: this.jwtService.sign(payload)
    }
  }
}
