import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { Ticket } from './model/ticket.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class TicketService {
  constructor(@InjectModel(Ticket) private ticketModel: typeof Ticket) {}

  create(createTicketDto: CreateTicketDto) {
    return this.ticketModel.create(createTicketDto);
  }

  findAll() {
    return this.ticketModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.ticketModel.findByPk(id);
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
     return this.ticketModel.update(updateTicketDto, {
       where: { id },
       returning: true,
     });
  }

  remove(id: number) {
    return this.ticketModel.destroy({ where: { id } });
  }
}
