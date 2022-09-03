import {FC, FormEvent, useState} from 'react';
import styles from './Form.module.scss';

import authService from '@/services/auth';
import {useDispatch} from 'react-redux';
import {defineUser, auth} from '@/store/slices/auth';
import {useRouter} from 'next/router';

const Form: FC = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();
  const dispatch = useDispatch();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!login || !password) return;

    authService.login(login, password).then(data => {
      if (data?.err){
        return;
      }

      dispatch(defineUser(data?.data));
      dispatch(auth());
      router.push('/chat')
    });
  }

  return (
    <form className={styles.wrapper} onSubmit={submitHandler}>
      <input type='text'
             className={styles.input}
             placeholder='Nickname'
             value={login}
             onChange={(e) => setLogin(e.target.value)}
      />
      <input type='password'
             className={styles.input}
             placeholder='Password'
             value={password}
             onChange={(e) => setPassword(e.target.value)}
      />
      <button type='submit' className={styles.submit}>
        Login
      </button>
    </form>
  )
};

export default Form;
