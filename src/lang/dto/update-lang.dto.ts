import { ApiProperty } from "@nestjs/swagger";



export class UpdateLangDto {
    @ApiProperty({ example: "uzbek" })
    name?: string
}