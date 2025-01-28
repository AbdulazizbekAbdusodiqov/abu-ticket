import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import { DiscountCoupon } from "src/discount_coupon/model/discount_coupon.model";
import { TicketStatus } from "src/ticket_status/model/ticket_status.model";
import { Seat } from "../../seat/model/seat.model";
import { Event } from "../../event/model/event.model";
import { CartItem } from "../../cart_item/models/cart_item.model";


interface ITicketCreationAttr{
    eventId:number,
    seatId:number,
    price:number,
    service_fee:number,
    statusId:number,
    ticket_type:string
}

@Table({ tableName: "ticket" })
export class Ticket extends Model<Ticket, ITicketCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.DECIMAL,
  })
  price: number;

  @Column({
    type: DataType.DECIMAL,
  })
  service_fee: number;

  @Column({
    type: DataType.STRING,
  })
  ticket_type: string;

  @ForeignKey(() => Seat)
  @Column({
    type: DataType.INTEGER,
  })
  seatId: number;

  @BelongsTo(() => Seat)
  seat: Seat;

  @ForeignKey(() => TicketStatus)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  statusId: number;

  @BelongsTo(() => TicketStatus)
  ticketSatus: TicketStatus;

  @ForeignKey(() => Event)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  eventId: number;

  @BelongsTo(() => Event)
  events: Event;

  @HasMany(() => CartItem)
  cartItems: CartItem[];

  @HasOne(() => DiscountCoupon)
  coupon: DiscountCoupon;
}
