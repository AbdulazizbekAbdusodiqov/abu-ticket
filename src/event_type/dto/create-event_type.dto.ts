import { ApiProperty } from "@nestjs/swagger";

export class CreateEventTypeDto {
    @ApiProperty({ example: "test" })
    name: string
}
