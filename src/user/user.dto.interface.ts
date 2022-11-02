import { IsString, IsOptional, IsEmail } from 'class-validator';

export interface UserDTO {
  id?: string;
  name: string;
  email: string;
}

export class CreateUserDTO implements UserDTO {
  @IsOptional()
  @IsString()
  id?: string;

  @IsString()
  name: string;

  @IsEmail()
  email: string;
}

export class UpdateUserDTO implements Partial<UserDTO> {
  @IsOptional()
  @IsString()
  id?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsEmail()
  email?: string;
}
