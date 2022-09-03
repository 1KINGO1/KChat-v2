import type { NextPage } from 'next'
import HomePage from '@/components/screens/home/HomePage';
import Meta from '@/utils/Meta';
import {GetServerSideProps} from 'next';
import * as cookie from 'cookie';
import authService from '@/services/auth';
import withAuth from '@/utils/withAuth';

const Home: NextPage = () => {

  return (
    <>
      <Meta title='KChat Login' description='KChat is a simple chat.'/>
      <HomePage />
    </>
  )
}

// Preventing flash of unauthorized content
export const getServerSideProps: GetServerSideProps =
  withAuth({redirectUrl: '/chat', tokenVerify: (token) => !token});

export default Home;
