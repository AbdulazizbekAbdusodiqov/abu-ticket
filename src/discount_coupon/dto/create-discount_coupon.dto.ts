import { ApiProperty } from "@nestjs/swagger";

export class CreateDiscountCouponDto {
  @ApiProperty({example: 1})
  ticketId: number;
  @ApiProperty({example: "1234"})
  discount_code: string;
  @ApiProperty({example: 1})
  discount_percentage: number;
  @ApiProperty({example: "test"})
  valid_from: string;
  @ApiProperty({example: "test"})
  valid_to: string;
  @ApiProperty({example: "test"})
  status: string;
}
