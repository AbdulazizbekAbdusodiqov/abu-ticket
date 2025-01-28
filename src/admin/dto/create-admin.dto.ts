export class CreateAdminDto {
  name: string;
  email: string;
  hashed_password: string;
  is_active: boolean;
  is_creator: boolean;
  hashed_refresh_token: string;
}
