import { ApiProperty } from "@nestjs/swagger";

export class CreateSeatTypeDto {
    @ApiProperty({ example: "test" })
    name : string
}
