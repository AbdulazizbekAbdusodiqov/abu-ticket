import { Module } from '@nestjs/common';
import { VenueVenueTypeService } from './venue_venue-type.service';
import { VenueVenueTypeController } from './venue_venue-type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VenueVenueType } from './models/venue_venue-type.model';
import { Venue } from '../venue/model/venue.model';
import { VenueType } from '../venue_type/models/venue_type.model';

@Module({
  imports:[SequelizeModule.forFeature([VenueVenueType, Venue, VenueType])],
  controllers: [VenueVenueTypeController],
  providers: [VenueVenueTypeService],
})
export class VenueVenueTypeModule {}
