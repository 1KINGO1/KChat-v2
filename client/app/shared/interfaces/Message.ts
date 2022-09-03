import MessageAuthor from '@/shared/interfaces/MessageAuthor';

export default interface Message{
  _id: string,
  content: string,
  author: MessageAuthor
}