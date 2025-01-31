import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class SignInDto {
    @IsEmail()
    readonly email: string;
    // @IsStrongPassword(
    //     { minLength: 5 }, 
    //     { message: "tuzuro parol kiritmadiz" }
    // )
    readonly password: string;

    @IsString()
    @IsNotEmpty()
    readonly value: string;
}