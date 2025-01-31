import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionController } from './region.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Region } from './model/region.model';
import { FileModule } from '../file/file.module';

@Module({
  imports : [
    FileModule,
    SequelizeModule.forFeature([Region])
  ],
  controllers: [RegionController],
  providers: [RegionService],
})
export class RegionModule {}
