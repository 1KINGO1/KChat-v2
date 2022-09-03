import type {GetServerSideProps, NextPage} from 'next'
import Meta from '@/utils/Meta';
import ChatPage from '@/components/screens/chat/ChatPage';
import withAuth from '@/utils/withAuth';

import '@/utils/socket';
import LoadingBar from '@/components/module/LoadingBar/LoadingBar';

const Chat: NextPage = () => {

  return (
    <>
      <Meta title='KChat' description='KChat is a simple chat.'/>
      <LoadingBar/>
      <ChatPage/>
    </>
  )
}

// Preventing flash of unauthorized content
export const getServerSideProps: GetServerSideProps =
  withAuth({redirectUrl: '/', tokenVerify: (token) => !!token});

export default Chat;
