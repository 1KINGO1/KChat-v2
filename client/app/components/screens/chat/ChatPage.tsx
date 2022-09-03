import {FC} from 'react';
import styles from './ChatPage.module.scss';
import Conversation from './components/Conversations/Conversation';
import ChatHeader from './components/ChatHeader/ChatHeader';
import Messages from './components/Messages/Messages';
import Form from './components/Form/Form';
import Conversations from '@/components/screens/chat/components/Conversations/Conversations';
import FindConversationButton from '@/components/screens/chat/components/FindConversationButton/FindConversationButton';
import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';

const ChatPage: FC = () => {

  const selectedId = useSelector<RootState>(state => state.cache.selectedConversationId);

  return (
    <div className={styles.wrapper}>
      <section className={styles.profileWrapper}>
        <Conversations/>
        <FindConversationButton/>
      </section>
      <section className={styles.messagesWrapper}>
        {selectedId ? (<>
          <ChatHeader/>
          <Messages/>
          <Form/>
        </>) : <></>}
      </section>
    </div>
  )

};

export default ChatPage;
