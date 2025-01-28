import { Injectable } from '@nestjs/common';
import { CreateBookingStatusDto } from './dto/create-booking_status.dto';
import { UpdateBookingStatusDto } from './dto/update-booking_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { BookingStatus } from './model/booking_status.model';

@Injectable()
export class BookingStatusService {
  constructor(@InjectModel(BookingStatus) private bookingStatusModel: typeof BookingStatus) {}

  create(createBookingStatusDto: CreateBookingStatusDto) {
    return this.bookingStatusModel.create(createBookingStatusDto);
  }

  findAll() {
    return this.bookingStatusModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.bookingStatusModel.findByPk(id);
  }

  update(id: number, updateBookingStatusDto: UpdateBookingStatusDto) {
    return this.bookingStatusModel.update(updateBookingStatusDto, {
      where: { id },
      returning: true,
    });
  }

  remove(id: number) {
    return this.bookingStatusModel.destroy({ where: { id } });
  }
}
