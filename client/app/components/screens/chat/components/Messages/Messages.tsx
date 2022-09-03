import {FC, useEffect} from 'react';
import Message from './Message';
import styles from './Messages.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store/store';

import MessageType from '@/shared/interfaces/Message';
import socket from '@/utils/socket';
import {addMessage, fetchMessages} from '@/store/slices/cache';
import {setLoading} from '@/store/slices/auth';

const Messages: FC = () => {

  const messages = useSelector<RootState>(state => state.cache.messages) as MessageType[];
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(setLoading(true));

    socket.on('fetchMessages', messages => {
      dispatch(fetchMessages(messages));

      dispatch(setLoading(false));
    });
    socket.on('messageCreate', message => {
      dispatch(addMessage(message));
    })

    return () => {
      socket.off('fetchMessages');
      socket.off('messageCreate');
    }
  }, []);


  return (
    <ul className={styles.wrapper}>
      {messages.map(message => (
        <Message author={message.author} content={message.content} id={message._id} key={message._id}/>
      ))}
    </ul>
  )
};

export default Messages;
