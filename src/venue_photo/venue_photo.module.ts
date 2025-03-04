import { Module } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { VenuePhotoController } from './venue_photo.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenuePhoto } from './model/venue_photo.model';
import { Venue } from '../venue/model/venue.model';
import { FileModule } from '../file/file.module';

@Module({
  imports:[SequelizeModule.forFeature([VenuePhoto, Venue]), FileModule],
  controllers: [VenuePhotoController],
  providers: [VenuePhotoService],
})
export class VenuePhotoModule {}
