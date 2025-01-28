import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './model/event.model';

@Module({
  imports:[SequelizeModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
