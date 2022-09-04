import {useEffect} from 'react';
import socket from '@/utils/socket';
import {fetchConversations} from '@/store/slices/cache';
import {useDispatch} from 'react-redux';
import ConversationType from '@/shared/interfaces/Conversation';

const useFetchConversations = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    socket.on('fetchConversations', (data: ConversationType[]) => {
      dispatch(fetchConversations(data));
    });
    return () => {
      socket.off('fetchConversations');
    }
  }, []);

}

export default useFetchConversations;