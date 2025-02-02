import { ApiProperty } from "@nestjs/swagger";

export class CreateRegionDto {
    @ApiProperty({ example: "test" })
    name:string;
    @ApiProperty({ example: "test" })
    image:string;
}
