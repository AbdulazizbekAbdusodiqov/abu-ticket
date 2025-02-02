import { ApiProperty } from "@nestjs/swagger"

export class CreateCartItemDto {
    @ApiProperty({ example: 1 })
    ticketId: number
    @ApiProperty({ example: 1 })
    cartId: number
    @ApiProperty({ example: 123 })
    quantity: number
}
