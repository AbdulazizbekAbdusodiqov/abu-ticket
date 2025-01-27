import { Model, Column, DataType, Table } from "sequelize-typescript";


interface ITicketStatusCreationAtrr{
    name :string
}

@Table({tableName:"ticket_status"})
export class TicketStatus extends Model<TicketStatus, ITicketStatusCreationAtrr> {

    @Column({
        type: DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @Column({
        type:DataType.STRING
    })
    name:string;

}
