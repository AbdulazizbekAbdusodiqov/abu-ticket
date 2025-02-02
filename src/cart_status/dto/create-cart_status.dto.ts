import { ApiProperty } from "@nestjs/swagger";

export class CreateCartStatusDto {
    @ApiProperty({ example: "test" })
    name:string
}
