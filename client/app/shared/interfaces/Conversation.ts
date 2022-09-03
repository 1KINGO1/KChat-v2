import User from './User';

export default interface Conversation {
  "_id": string,
  "createDate": Date,
  "users": [User, User],
  "messages": {
    id: string,
    authorId: string,
    content: string
  }[],
}