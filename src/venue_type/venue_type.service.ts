import { Injectable } from '@nestjs/common';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { VenueType } from './models/venue_type.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class VenueTypeService {

  constructor(
    @InjectModel(VenueType) private venueTypeModel: typeof VenueType
  ) { }

  async create(createVenueTypeDto: CreateVenueTypeDto) {
    try {

      const newVenueType = await this.venueTypeModel.create(createVenueTypeDto)

      return { message: "venue type created", newVenueType }
    } catch (error) {
      return { error: error.message }
    }
  }

  async findAll() {
    try {
      return this.venueTypeModel.findAll()
    } catch (error) {
      return { error: error.message }
    }
  }

  async findOne(id: number) {
    try {

      const venueType = await this.venueTypeModel.findByPk(id)
      if (!venueType?.dataValues) {
        return { message: "not found" }
      }
      
      return venueType
      
    } catch (error) {
      return { error: error.message }
    }
  }
  
  async update(id: number, updateVenueTypeDto: UpdateVenueTypeDto) {
    try {
      
      const venueType = await this.venueTypeModel.findByPk(id)
      if (!venueType?.dataValues) {
        return { message: "not found" }
      }
      
      await venueType.update({...updateVenueTypeDto})
      
      return { message: "updated", venueType }
    } catch (error) {
      return { error: error.message }
    }
  }
  
  async remove(id: number) {
    try {
      
      const venueType = await this.venueTypeModel.findByPk(id)
      if (!venueType?.dataValues) {
        return { message: "not found" }
      }
      await venueType.destroy()  
      
      return { message: "deleted" }
      
    } catch (error) {
      return { error: error.message }
    }
  }
}
