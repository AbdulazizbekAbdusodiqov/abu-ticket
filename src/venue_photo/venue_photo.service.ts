import { Injectable } from '@nestjs/common';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { InjectModel } from '@nestjs/sequelize';
import { VenuePhoto } from './model/venue_photo.model';

@Injectable()
export class VenuePhotoService {

  constructor(
    @InjectModel(VenuePhoto) private venuePhotoModel: typeof VenuePhoto
  ) { }

  create(createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoModel.create(createVenuePhotoDto)
  }

  findAll() {
    return this.venuePhotoModel.findAll({ include: { all: true } })
  }

  findOne(id: number) {
    return this.venuePhotoModel.findByPk(id, { include: { all: true } })
  }

  update(id: number, updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoModel.update(updateVenuePhotoDto, {where:{id}, returning:true})[1][0]
  }

  remove(id: number) {
    return this.venuePhotoModel.destroy({where:{id}})
  }
}
