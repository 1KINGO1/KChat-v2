import {Injectable} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {User, UserDocument} from './schemas/user.schema';
import {Model} from 'mongoose';
import UserDto from './dto/UserDto';
import responseMessage from '../utils/responseMessage';
import {Conversation, ConversationDocument} from './schemas/conversation.schema';

@Injectable()
export class DbService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>,
              @InjectModel(Conversation.name) private conversationModel: Model<ConversationDocument>
  ) {
  }

  async create(user: UserDto) {

    let findUser = await this.findUserByLogin(user.login);

    if (findUser) {
      return responseMessage(true, 'User with this login already exits!')
    }

    try {
      const newUser = new this.userModel({...user, totalMessages: 0, avatar: null, lastOnline: null});
      await newUser.save();
      return responseMessage(false, 'OK')
    } catch (e) {
      return responseMessage(true, 'Unknown error')
    }
  }

  async findUserByLogin(login: string) {
    try {
      return this.userModel.findOne({login});
    } catch (e) {
    }
  }

  async findUserById(id: string) {
    try {
      return this.userModel.findById(id);
    } catch (e) {
    }
  }

  async findConversationWithUser(userId: string) {
    let allConversations = await this.conversationModel.find({});
    let copy = JSON.parse(JSON.stringify(allConversations));
    return copy.filter(conversation => conversation.users.some(user => user._id == userId));
  }

  async findConversationById(id: string) {
    return this.conversationModel.findById(id);
  }

  async createConversation(userId1: string, userId2: string) {

    const user1 = await this.userModel.findById(userId1);
    const user2 = await this.userModel.findById(userId2);

    const conversation = new this.conversationModel({
      createDate: new Date(),
      users: [
        {login: user1.login, avatar: user1.avatar, _id: user1._id},
        {login: user2.login, avatar: user2.avatar, _id: user2._id}
      ],
      messages: []
    });
    await conversation.save()
    return responseMessage(false, 'OK')
  }

  async getMessages(conversationId: string) {
    const conversation = await this.findConversationById(conversationId);
    if (!conversation) return;
    return conversation.messages;
  }

  async createMessage(conversationId: string, _id: string, messageBody: string, author: {login: string, avatar: string, _id: string}) {
    const conversation = await this.findConversationById(conversationId);
    if (!conversation) return;
    conversation.messages = [...conversation.messages, {
      _id,
      content: messageBody,
      author: {
        login: author.login,
        avatar: author.avatar,
        _id: author._id
      }
    }];

    await conversation.save();

    return true;
  }
}
