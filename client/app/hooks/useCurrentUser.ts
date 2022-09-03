import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import Conversation from '@/shared/interfaces/Conversation';
import User from '@/shared/interfaces/User';

const useCurrentUser = () => {
  const selectedId = useSelector<RootState>(state => state.cache.selectedConversationId) as string;
  const id = useSelector<RootState>(state => state.auth.user._id) as string;
  const conversations = useSelector<RootState>(state => state.cache.conversations) as Conversation[];

  let user;
  const conversation = conversations.find(c => c._id === selectedId);
  if (selectedId && conversation) {
    user = conversation.users.find((user: User) => user._id !== id) as User;
  }

  return user;
};

export default useCurrentUser;