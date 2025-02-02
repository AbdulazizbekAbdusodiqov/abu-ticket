import { ApiProperty } from "@nestjs/swagger";

export class CreateDeliveryMethodDto {
    @ApiProperty({example: "test"})
    name:string
}
