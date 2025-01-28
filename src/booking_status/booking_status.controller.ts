import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingStatusService } from './booking_status.service';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';

@Controller('booking-status')
export class BookingStatusController {
  constructor(private readonly bookingStatusService: BookingStatusService) {}

  @Post()
  create(@Body() createBookingStatusDto: CreateBookingStatusDto) {
    return this.bookingStatusService.create(createBookingStatusDto);
  }

  @Get()
  findAll() {
    return this.bookingStatusService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingStatusService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookingStatusDto: UpdateBookingStatusDto) {
    return this.bookingStatusService.update(+id, updateBookingStatusDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingStatusService.remove(+id);
  }
}
