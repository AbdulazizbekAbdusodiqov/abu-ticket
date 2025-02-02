import { ApiProperty } from "@nestjs/swagger"

export class CreateDistrictDto {
    @ApiProperty({example: "Yangiyo'l"})
    name: string
    @ApiProperty({example: 1})
    regionId : number
}
