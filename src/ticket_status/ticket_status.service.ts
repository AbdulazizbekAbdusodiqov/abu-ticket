import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';

@Injectable()
export class TicketStatusService {
  create(createTicketStatusDto: CreateTicketStatusDto) {
    return 'This action adds a new ticketStatus';
  }

  findAll() {
    return `This action returns all ticketStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ticketStatus`;
  }

  update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    return `This action updates a #${id} ticketStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticketStatus`;
  }
}
