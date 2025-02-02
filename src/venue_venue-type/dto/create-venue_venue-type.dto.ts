import { ApiProperty } from "@nestjs/swagger"

export class CreateVenueVenueTypeDto {
    @ApiProperty({example:1})
    venueId: number
    @ApiProperty({example:1})
    venueTypeId: number
}
