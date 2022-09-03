import {Controller, Get, Param, Res} from '@nestjs/common';
import {DbService} from '../db/db.service';
import {AuthService} from '../auth/auth.service';
import responseMessage from '../utils/responseMessage';

@Controller('user')
export class UserController {
  constructor(
    private dbService: DbService,
    private authService: AuthService
  ) {}

  @Get(':id')
  async getUser(@Param('id') id, @Res() res){
    let user;
    try{
      user = await this.dbService.findUserByLogin(id) || await this.dbService.findUserById(id);
    }catch(e) {
      return res.send(responseMessage(true, 'User isnt found'));
    }
    if (!user){
      return res.send(responseMessage(true, 'User isnt found'));
    }
    let userCopy = JSON.parse(JSON.stringify(user));
    delete userCopy.password;
    res.send(responseMessage(false, 'OK', userCopy));
  }
}
