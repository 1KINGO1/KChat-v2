import {FC} from 'react';
import styles from './ChatHeader.module.scss';
import UserStatus from '@/components/screens/chat/components/UserStatus/UserStatus';
import useCurrentUser from '@/hooks/useCurrentUser';

const ChatHeader: FC = () => {

  const user = useCurrentUser();

  return (
    <header className={styles.wrapper}>
      {user?.login && (
        <>
          <p className={styles.messagesForNickname}>
            {user.login}
          </p>
          <UserStatus status='offline'/>
        </>
      )}
    </header>
  )
};

export default ChatHeader;
