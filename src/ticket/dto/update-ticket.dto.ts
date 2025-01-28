import { PartialType } from '@nestjs/swagger';
import { CreateTicketDto } from './create-ticket.dto';

export class UpdateTicketDto extends PartialType(CreateTicketDto) {
    eventId?:number;
    seatId?:number;
    price?:number;
    service_fee?:number;
    ticketStatusId?: number;
    ticket_typeId?:number;
}
