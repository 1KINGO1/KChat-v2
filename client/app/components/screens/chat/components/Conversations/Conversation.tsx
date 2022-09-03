import {FC} from 'react';
import styles from './Conversation.module.scss';
import {useDispatch} from 'react-redux';
import {selectConversation} from '@/store/slices/cache';
import socket from '@/utils/socket';

interface IConversation {
  nickname: string,
  avatarUrl: string,
  selected: boolean,
  id: string
}

const Conversation: FC<IConversation> = ({nickname, avatarUrl, selected, id}) => {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(selectConversation(id));
    socket.emit('groupChange', {id});
  }

  return (
    <li className={selected ? styles.wrapperSelected : styles.wrapper} onClick={clickHandler}>
      <img src={avatarUrl} alt={`${nickname} avatar`} className={styles.userAvatar}/>
      {nickname}
    </li>
  )
};

export default Conversation;
