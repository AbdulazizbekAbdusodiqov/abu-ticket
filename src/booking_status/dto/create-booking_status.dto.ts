import { ApiProperty } from "@nestjs/swagger";

export class CreateBookingStatusDto {
  @ApiProperty({ example: "hammasi nazorat ostida" })
  name: string;
}
