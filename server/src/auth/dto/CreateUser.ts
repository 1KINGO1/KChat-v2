import { IsNotEmpty, MinLength } from 'class-validator';

export default class CreateUser {
  @IsNotEmpty()
  @MinLength(8)
  login: string

  @IsNotEmpty()
  @MinLength(8)
  password: string
}