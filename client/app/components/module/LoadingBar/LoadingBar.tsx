import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import styles from './LoadingBar.module.scss';
import {AiOutlineLoading} from 'react-icons/ai';
import {setLoading} from '@/store/slices/auth';

const LoadingBar: FC = () => {

  const isLoading = useSelector<RootState>(state => state.auth.isLoading);
  const login = useSelector<RootState>(state => state.auth.user.login);
  const conversations = useSelector<RootState>(state => state.cache.conversations);

  const dispatch = useDispatch();

  useEffect(() => {
    if (login && conversations){
      dispatch(setLoading(false));
    }
  }, [login, conversations]);


  return (
    isLoading ?
    <div className={styles.wrapper}>
      <AiOutlineLoading/>
    </div> : <></>
  )
};

export default LoadingBar;
