import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Event } from './model/event.model';
import { FileService } from '../file/file.service';
import * as AWS from 'aws-sdk';

@Injectable()
export class EventService {
  AWS_S3_BUCKET = 'chelakn1';
  s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  });
  constructor(
    @InjectModel(Event) private eventModel: typeof Event,
    private readonly fileService: FileService
  ) { }

  async create(createEventDto: CreateEventDto, image: any) {
    
    const imageReq = await this.fileService.uploadFile(image)
    console.log("salomlar");
    return {
      event: this.eventModel.create({...createEventDto, photo:imageReq.Location}),
      imageReq
    }
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
