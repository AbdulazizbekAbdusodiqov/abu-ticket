import { Injectable } from '@nestjs/common';
import { CreateDistrictDto } from './dto/create-district.dto';
import { UpdateDistrictDto } from './dto/update-district.dto';
import { District } from './models/district.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class DistrictService {

    constructor(
      @InjectModel(District) private districtModel : typeof District
    ){}

  create(createDistrictDto: CreateDistrictDto) {
    return this.districtModel.create(createDistrictDto)
  }

  findAll() {
    return this.districtModel.findAll({include:{all:true}})
  }

  findOne(id: number) {
    return  this.districtModel.findByPk(id, {include:{all:true}})
  }

  update(id: number, updateDistrictDto: UpdateDistrictDto) {
    return `This action updates a #${id} district`;
  }

  remove(id: number) {
    return `This action removes a #${id} district`;
  }
}
