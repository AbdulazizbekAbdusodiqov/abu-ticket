import { Injectable } from '@nestjs/common';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { InjectModel } from '@nestjs/sequelize';
import { EventType } from './models/event_type.model';

@Injectable()



export class EventTypeService {

  constructor(
    @InjectModel(EventType) private eventTypeModel: typeof EventType
  ) { }

  create(createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeModel.create(createEventTypeDto)
  }

  findAll() {
    return this.eventTypeModel.findAll()
  }

  findOne(id: number) {
    return this.eventTypeModel.findByPk(id)
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    const [affectedRows, updatedEventTypes] = await this.eventTypeModel.update(
        { ...updateEventTypeDto }, // DTO ni to'g'ri formatga o'tkazish
        { where: { id }, returning: true }
    );

    if (affectedRows === 0) {
        return { message: "Event type not found" };
    }

    return { message: "Updated", updatedEventType: updatedEventTypes[0] };
}

  remove(id: number) {
    return `This action removes a #${id} eventType`;
  }
}
