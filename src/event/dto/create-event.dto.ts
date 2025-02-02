import { ApiProperty } from "@nestjs/swagger";

export class CreateEventDto {
  @ApiProperty({example: "test"})
  name: string;
  @ApiProperty({example: "asdfdssdf"})
  photo: string;
  @ApiProperty({example: "01-01-2025"})
  start_date: string;
  @ApiProperty({example: "01-01-2025"})
  start_time: string;
  @ApiProperty({example: "12:00"})
  finish_date: string;
  @ApiProperty({example: "12:00"})
  finish_time: string;
  @ApiProperty({example: "test"})
  info: string;
  @ApiProperty({example: 1})
  eventTypeId: number;
  @ApiProperty({example: 1})
  humanCategoryId: number;
  @ApiProperty({example: 1})
  venueId: number;
  @ApiProperty({example: 1})
  langId: number;
  @ApiProperty({example: "01-01-2025"})
  release_date: string;
}
