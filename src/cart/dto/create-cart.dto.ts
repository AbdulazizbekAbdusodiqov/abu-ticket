import { ApiProperty } from "@nestjs/swagger";
import { IsNumber,IsDate } from "class-validator";

export class CreateCartDto {
    @IsNumber()
    @ApiProperty({ example: 1 })
    customerId: number;
    @IsDate()
    @ApiProperty({ example: null })
    finishedAt?: Date | null;
    @IsNumber()
    @ApiProperty({ example: 1 })
    cart_statusId: number
}
