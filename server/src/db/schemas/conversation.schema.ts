import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ConversationDocument = Conversation & Document;

@Schema()
export class Conversation {
  @Prop()
  createDate: Date

  @Prop()
  users: {
    login: string,
    avatar: string,
    _id: string
  }[]

  @Prop()
  messages: {
    _id: string,
    content: string,
    author: {
      login: string,
      avatar: string,
      _id: string
    }
  }[]
}

export const ConversationSchema = SchemaFactory.createForClass(Conversation);