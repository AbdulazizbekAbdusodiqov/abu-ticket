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
    return this.eventTypeModel.create({...createEventTypeDto})
  }

  findAll() {
    return this.eventTypeModel.findAll()
  }

  findOne(id: number) {
    return this.eventTypeModel.findByPk(id)
  }

  async update(id: number, updateEventTypeDto: UpdateEventTypeDto) {
    
    const updatedEventType = await this.eventTypeModel.findByPk(id)
    if(!updatedEventType?.dataValues){
      return {message:"not found"}
    }

    await updatedEventType.update({...updateEventTypeDto})

    return {message : "updated"}
  }

  remove(id: number) {
    return this.eventTypeModel.destroy({where:{id}})
  }
}
