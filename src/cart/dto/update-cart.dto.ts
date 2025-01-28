import { PartialType } from '@nestjs/swagger';
import { CreateCartDto } from './create-cart.dto';
import { IsDate, IsNumber } from 'class-validator';

export class UpdateCartDto extends PartialType(CreateCartDto) {
    @IsNumber()
    customerId?: number;
    @IsDate()
    finishedAt?: Date | null;
    @IsNumber()
    statusId?: number
}
