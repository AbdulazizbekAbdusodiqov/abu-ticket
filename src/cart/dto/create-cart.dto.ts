import { IsNumber,IsDate } from "class-validator";

export class CreateCartDto {
    @IsNumber()
    customerId: number;
    @IsDate()
    finishedAt?: Date | null;
    @IsNumber()
    statusId: number
}
