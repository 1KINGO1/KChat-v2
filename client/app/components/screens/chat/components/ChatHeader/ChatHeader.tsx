import {FC} from 'react';
import styles from './ChatHeader.module.scss';
import UserStatus from '@/components/screens/chat/components/UserStatus/UserStatus';
import useCurrentUser from '@/hooks/useCurrentUser';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';

const ChatHeader: FC = () => {

  const user = useCurrentUser();

  const statuses = useSelector<RootState>(state => state.cache.onlineUsers) as string[];

  return (
    <header className={styles.wrapper}>
      {user?.login && (
        <>
          <p className={styles.messagesForNickname}>
            {user.login}
          </p>
          <UserStatus status={statuses.includes(user._id) ? 'online' : 'offline'}/>
        </>
      )}
    </header>
  )
};

export default ChatHeader;
