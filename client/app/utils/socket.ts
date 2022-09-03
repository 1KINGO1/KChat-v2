import { io } from 'socket.io-client';
import config from '@/config/constants';

const socket = io(config.SOCKET_URL, {
  withCredentials: true,
});

export default socket;
