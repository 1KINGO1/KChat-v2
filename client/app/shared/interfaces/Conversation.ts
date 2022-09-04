import User from './User';
import Message from '@/shared/interfaces/Message';

export default interface Conversation {
  "_id": string,
  "createDate": Date,
  "users": [User, User],
  "messages": Message[],
}