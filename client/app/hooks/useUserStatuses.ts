import socket from '@/utils/socket';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {addOnlineUser, fetchOnlineUsers, removeOnlineUser} from '@/store/slices/cache';

const useUserStatuses = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    socket.on('userOnline', (id) => {
      dispatch(addOnlineUser(id));
    })

    socket.on('onlineUsers', (idArr) => {
      dispatch(fetchOnlineUsers(idArr));
    })

    socket.on('userOffline', (id) => {
      dispatch(removeOnlineUser(id));
    })

    return () => {
      socket.off('userOnline');
      socket.off('onlineUsers');
    };
  }, []);

};

export default useUserStatuses;