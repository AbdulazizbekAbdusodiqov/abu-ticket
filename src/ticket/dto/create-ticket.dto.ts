import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({ example: 1 })
  eventId: number;
  @ApiProperty({ example: 1 })
  seatId: number;
  @ApiProperty({ example: 1 })
  price: number;
  @ApiProperty({ example: 1 })
  service_fee: number;
  @ApiProperty({ example: 1 })
  statusId: number;
  @ApiProperty({ example: "test" })
  ticket_type: string;
}
