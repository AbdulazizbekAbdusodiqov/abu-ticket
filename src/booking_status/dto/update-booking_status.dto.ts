import { PartialType } from '@nestjs/mapped-types';
import { CreateBookingStatusDto } from './create-booking_status.dto';

export class UpdateBookingStatusDto extends PartialType(CreateBookingStatusDto) {}
