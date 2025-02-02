import { ApiProperty } from "@nestjs/swagger";

export class CreateLangDto {
    @ApiProperty({example : "uzbek"})
    name: string
}