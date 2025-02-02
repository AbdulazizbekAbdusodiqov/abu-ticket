import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketStatusDto {
    @ApiProperty({ example: "test" })
    name:string
}
