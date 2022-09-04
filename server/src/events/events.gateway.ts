import {
  WebSocketGateway,
  OnGatewayConnection,
  WebSocketServer,
  ConnectedSocket,
  SubscribeMessage, MessageBody, OnGatewayDisconnect
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import {DbService} from '../db/db.service';
import {AuthService} from '../auth/auth.service';
import * as cookie from 'cookie';
import { v4 as uuidv4 } from 'uuid';

@WebSocketGateway(6679, {
  cors: {
    origin: process.env.CLIENT_URL,
  },
})
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(
    private dbService: DbService,
    private authService: AuthService
  ) {}

  @WebSocketServer()
  server: Server;

  async handleConnection(@ConnectedSocket() client: Socket) {
    const {token} = cookie.parse(client.handshake.headers.cookie || '');

    if (!token) return client.disconnect();
    const data = await this.authService.verifyToken(token);
    const user = await this.dbService.findUserByLogin(data?.login);

    if (!user) return client.disconnect();

    client.data.user = user;

    setTimeout(async () => {

      this.server.sockets.emit('userOnline', user._id);

      const conversations = await this.dbService.findConversationWithUser(user._id);

      conversations.forEach(conversation => {
        client.join(conversation._id);
      })

      let onlineSockets = [];

      for (let key of [...this.server.sockets.sockets.keys()]){
        if (this.server.sockets.sockets.get(key).data.user.login === client.data.user.login) continue;

        onlineSockets.push(this.server.sockets.sockets.get(key).data.user._id);
      }

      client.emit('onlineUsers', onlineSockets)

      client.emit('fetchConversations', conversations);
    }, 150)
  };

  async handleDisconnect(@ConnectedSocket() client: Socket){
    setTimeout(() => {
      this.server.sockets.emit('userOffline', client.data.user._id);
    }, 150)
  }

  @SubscribeMessage('groupChange')
  async groupChangeHandle(@ConnectedSocket() client: Socket, @MessageBody('id') id: string){
    const conversation = await this.dbService.findConversationById(id);
    if (!conversation) return;

    if (conversation.users.every(user => user._id + "" !== client.data.user._id + "")) return;

    client.data.selectedId = id;
  }

  @SubscribeMessage('messageCreate')
  async messageCreate(@ConnectedSocket() client: Socket, @MessageBody('value') value: string){

    const roomId = client.data?.selectedId;

    if (!roomId) return;

    const conversation = await this.dbService.findConversationById(roomId);
    if (!conversation) return;

    if (conversation.users.every(user => user._id + "" !== client.data.user._id + "")) return;

    if (value.length >= 200) return;

    const id = uuidv4();

    this.dbService.createMessage(
      roomId,
      id,
      value,
      {
        login: client.data.user.login,
        avatar: client.data.user.avatar,
        _id: client.data.user._id
      }
    );

    const messageObj = {
      conversationId: roomId,
      message: {
        _id: id,
        content: value,
        author: {
          id: client.data.user._id,
          login: client.data.user.login,
          avatar: client.data.user.avatar,
        },
      },
    }
    client.emit('messageCreate', messageObj);
    client.to(roomId).emit('messageCreate', messageObj);
  }

}
