import { ApiProperty } from "@nestjs/swagger"

export class CreateVenueDto {
    @ApiProperty({example:"test"})
    name: string
    @ApiProperty({example:"test"})
    address: string
    @ApiProperty({example:"test"})
    location: string
    @ApiProperty({example:"test"})
    site: string
    @ApiProperty({example:"test"})
    phone: string
    @ApiProperty({example:["test", "test1"]})
    schema: string[]
    @ApiProperty({example:1})
    regionId: number
    @ApiProperty({example:1})
    districtId: number
}
