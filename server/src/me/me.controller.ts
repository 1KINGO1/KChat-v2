import {Body, Controller, Get, Post, Req, Res} from '@nestjs/common';
import {DbService} from '../db/db.service';
import {AuthService} from '../auth/auth.service';
import responseMessage from '../utils/responseMessage';
import CreateConversation from './dto/CreateConversation';

@Controller('me')
export class MeController {
  constructor(
    private dbService: DbService,
    private authService: AuthService
  ) {}

  @Get('conversations')
  async getAllConversations(@Req() req, @Res() res){
    const {token} = req.cookies;
    if (!token){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'token cookie doesnt exist'));
    }
    const user = await this.dbService.findUserByLogin((await this.authService.verifyToken(token))?.login);
    if (!user){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'incorrect token'));
    }
    res.send(await this.dbService.findConversationWithUser(user._id))
  }

  @Post('conversations')
  async createConversation(@Req() req, @Res() res, @Body() body: CreateConversation){
    const {token} = req.cookies;
    if (!token){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'token cookie doesnt exist'));
    }
    const user = await this.dbService.findUserByLogin((await this.authService.verifyToken(token))?.login);
    if (!user){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'incorrect token'));
    }

    const targetUser = await this.dbService.findUserByLogin(body.login);

    if (!targetUser){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'User doesnt exist'));
    }

    if (user.login === targetUser.login){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'You cant start conversation with yourself'));
    }

    const userConversations = await this.dbService.findConversationWithUser(user._id);

    if (userConversations.some(conversation => conversation.users.some(user => user.login === targetUser.login))){
      res.statusCode = 400;
      return res.send(responseMessage(true, 'You have already started conversation with this user.'));
    }

    res.send(await this.dbService.createConversation(user._id, targetUser._id));
  }

}
