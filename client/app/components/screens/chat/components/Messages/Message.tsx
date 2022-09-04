import {FC} from 'react';
import MessageAuthor from '@/shared/interfaces/MessageAuthor';

import styles from './Message.module.scss';

interface IMessage {
  id: string,
  content: string,
  createData?: Date,
  author: MessageAuthor
}

const Message: FC<IMessage> = ({
                                 id,
                                 content,
                                 createData,
                                 author
                               }) => {
  return (
    <li className={styles.wrapper}>
      <img src={author.avatar || 'https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png'} alt={author.login + ' avatar'} className={styles.avatar}/>
      <div className={styles.header}>
        <span className={styles.nickname}>
          {author.login}
        </span>
        {createData && (
          <span className={styles.creationDate}>
            18/08/2022
          </span>
        )}
      </div>
      <div className={styles.content}>
        {content}
      </div>
    </li>
  )
};

export default Message;
