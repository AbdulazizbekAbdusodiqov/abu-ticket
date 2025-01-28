import { Injectable } from '@nestjs/common';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Venue } from './model/venue.model';

@Injectable()
export class VenueService {

  constructor(
    @InjectModel(Venue) private venueModel:typeof Venue
  ){}

  create(createVenueDto: CreateVenueDto) {
    return this.venueModel.create(createVenueDto) 
  }

  findAll() {
    return this.venueModel.findAll({include:{all:true}})
  }
  
  findOne(id: number) {
    return this.venueModel.findByPk(id,{include:{all:true}})
  }

  async update(id: number, updateVenueDto: UpdateVenueDto) {

    const venue = await this.venueModel.findByPk(id, {include:{all:true}})

    if(!venue){
      return "not found"
    }

    await venue.update({...updateVenueDto})

    return  venue
  }

  async remove(id: number) {

    const venue = await this.venueModel.findByPk(id)

    if(!venue){
      return "not found"
    }
    await venue.destroy()
    return {message :"deleted"}
  }
}
