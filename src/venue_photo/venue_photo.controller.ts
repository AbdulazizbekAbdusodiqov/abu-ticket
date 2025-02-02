import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, BadRequestException, UploadedFile } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) { }

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
    @Body() createVenuePhotoDto: CreateVenuePhotoDto,
    @UploadedFile() image: Express.Multer.File
  ) {
    return this.venuePhotoService.create(createVenuePhotoDto, image);
  }

  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
