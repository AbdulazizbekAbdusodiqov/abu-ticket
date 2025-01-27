import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';

@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
