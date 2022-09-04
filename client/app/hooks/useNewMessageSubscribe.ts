import {useEffect} from 'react';
import socket from '@/utils/socket';
import {addMessage} from '@/store/slices/cache';
import {useDispatch} from 'react-redux';

const useNewMessageSubscribe = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    socket.on('messageCreate', message => {
      dispatch(addMessage(message));
    })

    return () => {
      socket.off('messageCreate');
    }
  }, []);

}

export default useNewMessageSubscribe;