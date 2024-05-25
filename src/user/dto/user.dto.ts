import { IsString, IsEmail, IsNotEmpty, IsOptional  } from 'class-validator'

export class ClassRegisterUser{

  @IsString()
  @IsNotEmpty()
  firstName: string
  
  @IsString()
  @IsNotEmpty()
  lastName: string
  
  @IsString()
  @IsNotEmpty()
  userName: string
  
  @IsEmail()
  @IsNotEmpty()
  email: string
  
  @IsString()
  @IsNotEmpty()
  password: string

  @IsOptional()
  @IsString()
  img: string | null

  
}