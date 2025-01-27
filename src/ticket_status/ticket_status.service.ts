import { Injectable } from '@nestjs/common';
import { CreateTicketStatusDto } from './dto/create-ticket_status.dto';
import { UpdateTicketStatusDto } from './dto/update-ticket_status.dto';
import { InjectModel } from '@nestjs/sequelize';
import { TicketStatus } from './model/ticket_status.model';

@Injectable()
export class TicketStatusService {

  constructor(
    @InjectModel(TicketStatus)
    private ticketStatusModel: typeof TicketStatus
  ) { }

  async create(createTicketStatusDto: CreateTicketStatusDto) {

    try {
      const newTicketStatus = await this.ticketStatusModel.create(createTicketStatusDto)

      return { message: "ticket status created", newTicketStatus }
    } catch (error) {
      return { error: error.message }
    }
  }

  findAll() {
    try {

      return this.ticketStatusModel.findAll()

    } catch (error) {
      return { error: error.message }
    }
  }

  async findOne(id: number) {
    try {
      const ticketStatus = await this.ticketStatusModel.findByPk(id)

      if (!ticketStatus?.dataValues) {
        return { message: "ticket status not found" }
      }

      return ticketStatus

    } catch (error) {
      return { error: error.message }
    }
  }

  async update(id: number, updateTicketStatusDto: UpdateTicketStatusDto) {
    try {
      const ticketStatus = await this.ticketStatusModel.findByPk(id)

      if (!ticketStatus?.dataValues) {
        return { message: "ticket status not found" }
      }

      await ticketStatus.update({ ...updateTicketStatusDto })

      return { message: "updated", ticketStatus }

    } catch (error) {
      return { error: error.message }
    }

  }

  async remove(id: number) {
    try {
      const ticketStatus = await this.ticketStatusModel.findByPk(id)

      if (!ticketStatus?.dataValues) {
        return { message: "ticket status not found" }
      }

      await ticketStatus.destroy()

      return { message: "deleted" }

    } catch (error) {
      return { error: error.message }
    }
  }
}
