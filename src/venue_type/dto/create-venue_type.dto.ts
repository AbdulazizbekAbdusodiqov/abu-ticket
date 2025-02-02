import { ApiProperty } from "@nestjs/swagger";

export class CreateVenueTypeDto {
    @ApiProperty({example:"test"})
    name:string
}
