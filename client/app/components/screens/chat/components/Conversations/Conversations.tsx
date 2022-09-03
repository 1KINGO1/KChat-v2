import {FC, useContext, useEffect} from 'react';
import styles from './Conversations.module.scss';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import Conversation from '@/components/screens/chat/components/Conversations/Conversation';

import ConversationType from '@/shared/interfaces/Conversation';
import User from '@/shared/interfaces/User';
import socket from '@/utils/socket';
import {fetchConversations} from '@/store/slices/cache';

const Conversations: FC = () => {

  const conversations = useSelector<RootState>(state => state.cache.conversations) as ConversationType[];
  const selectedId = useSelector<RootState>(state => state.cache.selectedConversationId);
  const id = useSelector<RootState>(state => state.auth.user._id);

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('fetchConversations', (data: ConversationType[]) => {
      dispatch(fetchConversations(data));
    });
    return () => {
      socket.off('fetchConversations');
    }
  }, []);


  return (
    <ul className={styles.conversationList}>
      {conversations.map(conversation => {
        const user = conversation.users.find(user => user._id !== id) as User;

        return (
          <Conversation nickname={user.login}
                        avatarUrl={user.avatar || 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'}
                        selected={selectedId === conversation._id}
                        key={conversation._id}
                        id={conversation._id}
          />
        )
      })}
    </ul>
  )
};

export default Conversations;
