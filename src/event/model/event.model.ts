import { Column, DataType, ForeignKey, HasMany, Model, Table } from "sequelize-typescript";
import { EventType } from "src/event_type/models/event_type.model";
import { Lang } from "src/lang/models/lang.model";
import { Ticket } from "src/ticket/model/ticket.model";
import { Venue } from "src/venue/model/venue.model";
import { HumanCategory } from "../../human_category/model/human_category.model";


interface IEventCreationAttr{
    name:string,
    photo:string,
    start_date:string,
    start_time:string,
    finish_date:string,
    finish_time:string,
    info:string,
    eventTypeId:number,
    humanCategoryId:number,
    venueId:number,
    langId:number,
    release_date:string
}

@Table({ tableName: "event" })
export class Event extends Model<Event, IEventCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  photo: string;

  @Column({
    type: DataType.DATE,
  })
  start_date: string;

  @Column({
    type: DataType.DATE,
  })
  start_time: string;

  @Column({
    type: DataType.DATE,
  })
  finish_date: string;

  @Column({
    type: DataType.DATE,
  })
  finish_time: string;

  @Column({
    type: DataType.DATE,
  })
  release_date: string;


  @Column({
    type: DataType.STRING,
  })
  info: string;

  @ForeignKey(() => EventType)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  eventTypeId: number;

  @ForeignKey(() => HumanCategory)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  humanCategoryId: number;


  @ForeignKey(() => Venue)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  venueId: number;


  @ForeignKey(() => Lang)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  langId: number;

  @HasMany(() => Ticket)
  ticket: Ticket[];
}
