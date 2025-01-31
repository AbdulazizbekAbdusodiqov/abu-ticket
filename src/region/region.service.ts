import { Injectable } from '@nestjs/common';
import { CreateRegionDto } from './dto/create-region.dto';
import { UpdateRegionDto } from './dto/update-region.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Region } from './model/region.model';
import { FileService } from '../file/file.service';

@Injectable()
export class RegionService {

  constructor(
    @InjectModel(Region) private regionModel : typeof Region,
    private readonly fileService : FileService
  ){}

  async create(createRegionDto: CreateRegionDto, image:any) {
    const fileName = await this.fileService.saveFile(image)
    return this.regionModel.create({...createRegionDto, image:fileName})
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
