import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatDto {
  @ApiProperty({ example: 1 })
  sector: number;
  @ApiProperty({ example: 1 })
  row_number: number;
  @ApiProperty({ example: 1 })
  number: number;
  @ApiProperty({ example: 1 })
  venueId: number;
  @ApiProperty({ example: 1 })
  seatTypeId: number;
  @ApiProperty({ example: "test" })
  location_in_schema: string;
}
