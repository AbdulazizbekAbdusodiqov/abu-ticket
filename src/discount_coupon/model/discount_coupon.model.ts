import { BelongsTo, Column, DataType, ForeignKey, HasOne, Model, Table } from "sequelize-typescript";
import { Booking } from "../../booking/model/booking.model";
import { Ticket } from "../../ticket/model/ticket.model";

interface IDiscountCouponAttr{
    ticketId:number,
    discount_code:string,
    discount_percentage:number,
    valid_from:string,
    valid_to:string,
    status:string
}

@Table({ tableName: "discount_coupun" })
export class DiscountCoupon extends Model<DiscountCoupon, IDiscountCouponAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  discount_code: string;

  @Column({
    type: DataType.INTEGER,
  })
  discount_percentage: number;

  @Column({
    type: DataType.DATE,
  })
  valid_from: string;

  @Column({
    type: DataType.DATE,
  })
  valid_to: string;

  @Column({
    type: DataType.STRING,
  })
  status: string;

  @ForeignKey(() => Ticket)
  @Column({
    type: DataType.INTEGER,
  })
  ticketId: number;

  @BelongsTo(() => Ticket)
  ticket: Ticket;

  @HasOne(() => Booking)
  booking: Booking;
}
