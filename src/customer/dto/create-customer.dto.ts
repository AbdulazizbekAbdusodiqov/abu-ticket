import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNumber, IsString, Max, Min } from "class-validator"

export enum Gender {
    Male = 'Male',
    Female = 'Female',
    Other = 'Other',
}

export class CreateCustomerDto {
    @IsString()
    @Min(3)
    @Max(30)
    @ApiProperty({ example: "ism" })
    first_name: string;
    @IsString()
    @Min(3)
    @Max(30)
    @ApiProperty({ example: "familiya" })
    last_name: string;
    @IsString()
    phone: string;
    @IsString()
    @Min(3)
    @ApiProperty({ example: "juda_kuchli_parol" })
    password: string;
    @IsString()
    @IsEmail()
    @ApiProperty({ example: "test@test.com" })
    email: string;
    @IsString()
    @ApiProperty({ example: "01-01-2025" })
    birth_day: string;
    @IsString()
    @IsEnum(Gender)
    @ApiProperty({ example: "Male" })
    gender: Gender;
    @IsNumber()
    @ApiProperty({ example: 1 })
    langId: number;
}
