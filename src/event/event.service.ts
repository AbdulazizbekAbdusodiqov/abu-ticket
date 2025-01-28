import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './model/event.model';

@Injectable()
export class EventService {
  constructor(
    @InjectModel(Event) private eventModel: typeof Event
  ) {}

  create(createEventDto: CreateEventDto) {
    return this.eventModel.create(createEventDto);
  }

  findAll() {
    return this.eventModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.eventModel.findByPk(id);
  }

  update(id: number, updateEventDto: UpdateEventDto) {
     return this.eventModel.update(updateEventDto, {
       where: { id },
       returning: true,
     });
  }

  remove(id: number) {
    return this.eventModel.destroy({ where: { id } });
  }
}
