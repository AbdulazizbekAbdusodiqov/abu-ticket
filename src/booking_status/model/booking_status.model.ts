import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { Booking } from "src/booking/model/booking.model";

interface createBookingStatusAttr {
  name: string;
}


@Table({ tableName: "booking_status" })
export class BookingStatus extends Model<
  BookingStatus,
  createBookingStatusAttr
> {
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

  @HasMany(() => Booking)
  carts: Booking[];
}
