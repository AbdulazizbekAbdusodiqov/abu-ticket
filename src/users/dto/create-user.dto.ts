import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    @ApiProperty({example:"test"})
    name: string;
    @IsEmail()
    @ApiProperty({example:"test@test.com"})
    email: string;
    @IsString()
    @ApiProperty({example:"juda_kuchli_parol"})
    password: string;
    @IsString()
    @ApiProperty({example:"admin"})
    value:string
}
