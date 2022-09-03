import { Module } from '@nestjs/common';
import { MeController } from './me.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {User, UserSchema} from '../db/schemas/user.schema';
import {Conversation, ConversationSchema} from '../db/schemas/conversation.schema';
import {DbModule} from '../db/db.module';
import {AuthModule} from '../auth/auth.module';

@Module({
  imports: [DbModule, AuthModule, MongooseModule.forFeature([
    { name: User.name, schema: UserSchema },
    { name: Conversation.name, schema: ConversationSchema }
  ])],
  controllers: [MeController],
})
export class MeModule {}
