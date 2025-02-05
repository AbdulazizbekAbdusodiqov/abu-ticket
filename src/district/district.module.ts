import { Module } from '@nestjs/common';
import { DistrictService } from './district.service';
import { DistrictController } from './district.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { District } from './models/district.model';
import { Region } from '../region/model/region.model';
import { Venue } from '../venue/model/venue.model';

@Module({
  imports: [SequelizeModule.forFeature([District, Region, Venue])],
  controllers: [DistrictController],
  providers: [DistrictService],
})
export class DistrictModule {}
