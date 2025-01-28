import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';

@Module({
  imports : [SequelizeModule.forFeature([EventType])],
  controllers: [EventTypeController],
  providers: [EventTypeService],
})
export class EventTypeModule {}
