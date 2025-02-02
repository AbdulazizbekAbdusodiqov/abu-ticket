import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingDto {
  @ApiProperty({ example: "01-01-2025" })
  finishedAt: string;
  @ApiProperty({ example: 1 })
  paymentMethodId: number;
  @ApiProperty({ example: 1 })
  deliveryMethodId: number;
  @ApiProperty({ example: 1 })
  discountCoupunId: number;
  @ApiProperty({ example: 1 })
  statusId: number;
  @ApiProperty({ example: 1 })
  cartId: number;
}
