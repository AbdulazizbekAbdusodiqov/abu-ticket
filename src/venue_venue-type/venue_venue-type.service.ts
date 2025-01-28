import { Injectable } from '@nestjs/common';
import { CreateVenueVenueTypeDto } from './dto/create-venue_venue-type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue_venue-type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenueVenueType } from './models/venue_venue-type.model';

@Injectable()
export class VenueVenueTypeService {

  constructor(
    @InjectModel(VenueVenueType) private venueVenueTypeModel: typeof VenueVenueType
  ) { }


  create(createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeModel.create(createVenueVenueTypeDto)
  }

  findAll() {
    return this.venueVenueTypeModel.findAll()
  }

  findOne(id: number) {
    return `This action returns a #${id} venueVenueType`;
  }

  update(id: number, updateVenueVenueTypeDto: UpdateVenueVenueTypeDto) {
    return `This action updates a #${id} venueVenueType`;
  }

  remove(id: number) {
    return `This action removes a #${id} venueVenueType`;
  }
}
