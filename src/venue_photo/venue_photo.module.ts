import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './model/venue_photo.model';
import { Venue } from 'src/venue/model/venue.model';

@Module({
  imports:[SequelizeModule.forFeature([VenuePhoto, Venue])],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
