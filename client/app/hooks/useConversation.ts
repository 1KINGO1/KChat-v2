import {useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import Conversation from '@/shared/interfaces/Conversation';

const useConversation = () => {
  const selectedId = useSelector<RootState>(state => state.cache.selectedConversationId) as string;
  const conversations = useSelector<RootState>(state => state.cache.conversations) as Conversation[];

  return conversations.find(c => c._id === selectedId);
};

export default useConversation;