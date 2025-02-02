import { ApiProperty } from "@nestjs/swagger";


export class CreateHumanCategoryDto {
    @ApiProperty({ example: "test" })
    name: string;
    @ApiProperty({ example: 1 })
    start_age: number;
    @ApiProperty({ example: 60 })
    finish_age: number;
    @ApiProperty({ example: "Male" })
    gender: string
}
