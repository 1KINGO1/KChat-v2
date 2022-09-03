import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import {DbModule} from '../db/db.module';
import {AuthModule} from '../auth/auth.module';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from '../db/schemas/user.schema';
import {Conversation, ConversationSchema} from '../db/schemas/conversation.schema';

@Module({
  imports: [DbModule, AuthModule, MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Conversation.name, schema: ConversationSchema }
  ])],
  controllers: [UserController]
})
export class UserModule {}
