import { PartialType } from '@nestjs/swagger';
import { CreateCustomerDto } from './create-customer.dto';
import { IsEmail, Max, Min, IsEnum, IsNumber, IsString } from "class-validator"

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
    @IsString()
    @Min(3)
    @Max(30)
    first_name?: string;
    @IsString()
    @Min(3)
    @Max(30)
    last_name?: string;
    @IsString()
    phone?: string;
    @IsString()
    @Min(3)
    password?: string;
    @IsString()
    @IsEmail()
    email?: string;
    @IsString()
    birth_day?: string;
    @IsString()
    @IsEnum(Gender)
    gender?: Gender;
    @IsNumber()
    langId?: number;
}
