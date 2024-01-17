import { IsDateString, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreatePostDto {

  @IsNotEmpty()
  @IsString()
  first_name: string;


  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsDateString({ strict: true }) //should be in format 2022-07-15.
  dateOfBirth: Date;

  @IsEmail() //should be a valid email
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
