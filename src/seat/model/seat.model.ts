import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { SeatType } from "../../seat_type/models/seat_type.model";
import { Ticket } from "../../ticket/model/ticket.model";
import { Venue } from "../../venue/model/venue.model";


interface ISeatCreatonAttr{
    sector:number,
    row_number:number,
    number:number,
    venueId:number,
    seatTypeId:number,
    location_in_schema:string
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, ISeatCreatonAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.INTEGER,
  })
  sector: number;

  @Column({
    type: DataType.INTEGER,
  })
  row_number: number;

  @Column({
    type: DataType.INTEGER,
  })
  number: number;

  @Column({
    type: DataType.STRING,
  })
  location_in_schema: string;

  @ForeignKey(() => SeatType)
  @Column({
    type: DataType.INTEGER,
  })
  seatTypeId: number;

  @BelongsTo(() => SeatType)
  seatType: SeatType;
  
  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  venueId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
