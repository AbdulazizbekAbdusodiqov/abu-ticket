import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class SignInDto {
    @IsEmail()
    @ApiProperty({ example: "test@test.com" })
    readonly email: string;
    
    @ApiProperty({ example: "juda_kuchli_parol" })
    readonly password: string;
    
    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: "admin" })
    readonly value: string;
}