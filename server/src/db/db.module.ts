import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from './schemas/user.schema';
import {Conversation, ConversationSchema} from './schemas/conversation.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Conversation.name, schema: ConversationSchema }
  ])],
  providers: [DbService],
  exports: [DbService]
})
export class DbModule {}
