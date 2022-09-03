import {FC, FormEvent, useState} from 'react';
import styles from './Form.module.scss';
import {AiOutlineSend} from 'react-icons/ai';
import useCurrentUser from '@/hooks/useCurrentUser';
import socket from '@/utils/socket';

const Form: FC = () => {

  const [value, setValue] = useState('');

  const user = useCurrentUser();

  const submitHandler = (e: FormEvent<HTMLFormElement>)  => {
    e.preventDefault();

    if (value === '') return;
    socket.emit('messageCreate', {value});

    setValue('');
  }

  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
      <input type="text"
             className={styles.input}
             placeholder={`Message for ${user?.login}`}
             value={value}
             onChange={e => setValue(e.target.value)}/>
      <button type='submit' className={styles.sendButton}><AiOutlineSend/></button>
    </form>
  )
};

export default Form;
