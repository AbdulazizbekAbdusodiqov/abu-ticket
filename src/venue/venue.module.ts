import { Module } from '@nestjs/common';
import { VenueService } from './venue.service';
import { VenueController } from './venue.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from '../region/model/region.model';
import { Venue } from './model/venue.model';
import { District } from '../district/models/district.model';
import { VenueVenueType } from '../venue_venue-type/models/venue_venue-type.model';

@Module({
  imports:[SequelizeModule.forFeature([Venue, Region, District, VenueVenueType])],
  controllers: [VenueController],
  providers: [VenueService],
})
export class VenueModule {}
