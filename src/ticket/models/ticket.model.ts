import { Model, Table } from "sequelize-typescript";



interface ITicketCreationAttr{
    eventId:number;
    seatId:number;
    price:number;
    service_fee:number;
    ticketStatusId: number;
    ticket_typeId:number;
}

@Table({tableName:"ticket"})
export class Ticket extends Model<Ticket, ITicketCreationAttr> {

}
