import { ApiProperty } from "@nestjs/swagger";

export class CreatePaymentMethodDto {
    @ApiProperty({ example: "test" })
    name: string
}
