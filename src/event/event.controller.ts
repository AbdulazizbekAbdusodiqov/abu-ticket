import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, BadRequestException, UploadedFile } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) { }

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      fileFilter: (req, image, callback) => {
        console.log(image);

        const allowedTypes = /jpeg|jpg|png|gif/;
        const extname = allowedTypes.test(image.originalname.toLowerCase());
        const mimetype = allowedTypes.test(image.mimetype);
        if (extname && mimetype) {
          callback(null, true);
        } else {
          callback(
            new BadRequestException('Faqat image filelar yuklash mumkin!'),
            false,
          );
        }
      },
      limits: {
        fileSize: 2 * 1024 * 1024, // Maksimal fayl hajmi: 2MB
      },
    }),
  )
  create(
    @Body() createEventDto: CreateEventDto, 
  @UploadedFile() image: Express.Multer.File) {
    return this.eventService.create(createEventDto, image);
  }

  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
