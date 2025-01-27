import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './model/region.model';

@Injectable()
export class RegionService {

  constructor(
    @InjectModel(Region) private regionModel : typeof Region
  ){}

  create(createRegionDto: CreateRegionDto) {
    return this.regionModel.create(createRegionDto)
  }

  findAll() {
    return this.regionModel.findAll({include:{all :true}})
  }

  findOne(id: number) {
    return this.regionModel.findByPk(id,{include:{all :true}})
  }

  async update(id: number, updateRegionDto: UpdateRegionDto) {

    const region = await this.regionModel.findByPk(id)
    if(!region){
      return "not found"
    }

    await region.update(updateRegionDto)

    return  {message :"updated", region}
  }

  async remove(id: number) {
    const region = await this.regionModel.findByPk(id)
    if(!region){
      return "not found"
    }

    await region.destroy()

    return  {message :"deleted"}
  }
}
