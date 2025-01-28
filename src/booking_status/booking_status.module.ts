import { Module } from '@nestjs/common';
import { BookingStatusService } from './booking_status.service';
import { BookingStatusController } from './booking_status.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { BookingStatus } from './model/booking_status.model';

@Module({
  imports:[SequelizeModule.forFeature([BookingStatus])],
  controllers: [BookingStatusController],
  providers: [BookingStatusService],
})
export class BookingStatusModule {}
