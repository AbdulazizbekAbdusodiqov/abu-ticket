import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './model/event.model';
import { FileModule } from '../file/file.module';

@Module({
  imports:[SequelizeModule.forFeature([Event]), FileModule],
  controllers: [EventController],
  providers: [EventService],
  exports:[EventService]
})
export class EventModule {}
