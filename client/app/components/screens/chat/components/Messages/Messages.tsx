import {FC, useEffect, useRef} from 'react';
import Message from './Message';
import MessageType from '@/shared/interfaces/Message';
import useConversation from '@/hooks/useConversation';
import styles from './Messages.module.scss';
import socket from '@/utils/socket';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import useNewMessageSubscribe from '@/hooks/useNewMessageSubscribe';

const Messages: FC = () => {

  const endOfMessages = useRef<HTMLLIElement>({} as HTMLLIElement);
  const selectedId = useSelector<RootState>(state => state.cache.selectedConversationId) as string;
  const conversation = useConversation();

  //Subscribe to new messages
  useNewMessageSubscribe();

  useEffect(() => {
    endOfMessages.current.scrollIntoView();
  }, [selectedId]);


  useEffect(() => {
    const handler = (message: {conversationId: string, message: MessageType}) => {
      console.log(conversation?._id, message.conversationId);
      if (message.conversationId === conversation?._id){
        // To do scroll after new message render
        // I don't know for sure why this is working, but never mind.
        queueMicrotask(() => endOfMessages.current.scrollIntoView());
      }
    };

    endOfMessages.current.scrollIntoView();
    socket.on('messageCreate', handler);

    return () => {
      socket.off('messageCreate', handler);
    }
  }, []);


  return (
    <ul className={styles.wrapper}>
      {conversation?.messages.map(message => (
        <Message author={message.author} content={message.content} id={message._id} key={message._id}/>
      ))}
      <li className={styles.endOfMessages} ref={endOfMessages}></li>
    </ul>
  )
};

export default Messages;
