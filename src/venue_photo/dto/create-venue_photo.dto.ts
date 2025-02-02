import { ApiProperty } from "@nestjs/swagger"

export class CreateVenuePhotoDto {
    @ApiProperty({example:1})
    venueId: number
    // @ApiProperty({example:"https://localhost:3000"})
    url: string
}
