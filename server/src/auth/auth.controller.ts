import {Body, Controller, Post, Req, Res} from '@nestjs/common';
import {DbService} from '../db/db.service';
import CreateUser from './dto/CreateUser';
import {AuthService} from './auth.service';
import responseMessage from '../utils/responseMessage';
import VerifyToken from './dto/VerifyToken';
import Login from './dto/Login';

@Controller('auth')
export class AuthController {
  constructor(
    private dbService: DbService,
    private authService: AuthService
  ) {}

  @Post('login')
  async login(@Body() {login, password}: Login, @Res() res){
    const user = await this.dbService.findUserByLogin(login);
    if (!user){
      res.send(responseMessage(true, "User doesn't exist!"));
      return;
    }
    if (user.password !== password){
      res.send(responseMessage(true, "The password doesn't match!"));
      return;
    }

    const userCopy = JSON.parse(JSON.stringify(user));

    delete userCopy.password;

    res.cookie('token', await this.authService.createToken(login)).send(responseMessage(false, 'OK', userCopy));
  }

  @Post('verifyToken')
  async verifyToken(@Body() {token: tokenBody}: VerifyToken, @Req() req, @Res() res){

    let token = req.cookies.token || tokenBody;

    try{
      const decode = await this.authService.verifyToken(token + "");
      const user = await this.dbService.findUserByLogin(decode?.login);

      if (!user) {
        throw 'error';
      }
      const userCopy = JSON.parse(JSON.stringify(user));

      delete userCopy.password;
      res.send(responseMessage(false, 'OK', userCopy));
    }
    catch (e) {
      res.send(responseMessage(true, 'Incorrect token!'))
    }
  }

  @Post('registration')
  async createUser(@Body() data: CreateUser) {
    return this.dbService.create({login: data.login, password: data.password});
  }
}
