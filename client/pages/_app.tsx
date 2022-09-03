import type {AppProps} from 'next/app';
import {FC, useEffect} from 'react';
import store, {RootState} from '@/store/store';
import {Provider, useDispatch, useSelector} from 'react-redux';
import Cookies from 'js-cookie';

import '@/assets/styles/variables.scss';
import '@/assets/styles/null.scss';
import '@/assets/styles/global.scss';

import Default from '@/components/layouts/Default';
import {useRouter} from 'next/router';
import authService from '@/services/auth';
import {defineUser, unAuth, auth} from '@/store/slices/auth';

function App({Component, pageProps}: AppProps) {

  const isAuth = useSelector<RootState>(state => state.auth.isAuth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!Cookies.get('token')) return;
    authService.verifyToken().then((data) => {
      if (data?.err){
        Cookies.remove('token');
        dispatch(unAuth());
        return;
      }
      dispatch(defineUser(data?.data));
      dispatch(auth());
    })
  }, []);


  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  )
}


function appWithStore(Component: FC<AppProps>){
  return (props: AppProps) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  )
}

export default appWithStore(App);
