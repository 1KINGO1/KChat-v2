import type { NextPage } from 'next'
import HomePage from '@/components/screens/HomePage/HomePage';
import Meta from '@/utils/Meta';

const Home: NextPage = () => {
  return (
    <>
      <Meta title='KChat Login' description='KChat is a simple chat.'/>
      <HomePage />
    </>
  )
}

export default Home;
