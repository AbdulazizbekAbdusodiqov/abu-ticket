import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsString, IsEmail } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @ApiProperty({ example: "nimadir" })
  name: string;
  
  @IsString()
  @IsEmail()
  @ApiProperty({ example: "email@gamil.com" })
  email: string;
  
  @ApiProperty({ example: "parol1234_" })
  password: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh_token: string;
}
