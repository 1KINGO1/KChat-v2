import { IsNotEmpty, MinLength } from 'class-validator';

export default class Login {
  @IsNotEmpty()
  login: string

  @IsNotEmpty()
  password: string
}