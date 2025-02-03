import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { BookingStatus } from "../../booking_status/model/booking_status.model";
import { PaymentMethod } from "../../payment_method/models/payment_method.model";
import { DeliveryMethod } from "../../delivery_method/models/delivery_method.model";
import { Cart } from "../../cart/models/cart.model";
import { DiscountCoupon } from "../../discount_coupon/model/discount_coupon.model";


interface IBookingCreationAttr {
  finishedAt: string;
  paymentMethodId: number;
  deliveryMethodId: number;
  discountCoupunId: number;
  statusId: number;
  cartId: number;
}

@Table({ tableName: "booking" })
export class Booking extends Model<Booking, IBookingCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  }) 
  id: number;

  @Column({
    type: DataType.DATE,
  })
  finishedAt: string;

  @ForeignKey(() => PaymentMethod)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  paymentMethodId: number;

  @BelongsTo(() => PaymentMethod)
  paymentMethod: PaymentMethod;

  @ForeignKey(() => DeliveryMethod)
  @Column({
    type: DataType.INTEGER,
  })
  deliveryMethodId: number;

  @BelongsTo(() => DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  @ForeignKey(() => DiscountCoupon)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  discountCoupunId: number;

  @BelongsTo(() => DiscountCoupon)
  discountCoupun: DiscountCoupon;

  @ForeignKey(() => BookingStatus)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  statusId: number;

  @BelongsTo(() => BookingStatus)
  bookingStatus: BookingStatus;

  @ForeignKey(() => Cart)
  @Column({
    type: DataType.INTEGER,
    onDelete: "Restrict",
  })
  cartId: number;

  @BelongsTo(() => Cart)
  cart: Cart;
}
