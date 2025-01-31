import { IsBoolean, IsString,IsEmail } from "class-validator";

export class CreateAdminDto {
  @IsString()
  name: string;

  @IsString()
  @IsEmail()
  email: string;
  password: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;  
  hashed_refresh_token: string;
}
