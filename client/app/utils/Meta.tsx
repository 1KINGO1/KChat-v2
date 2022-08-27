import {FC} from 'react';
import Head from 'next/head';

interface IMeta{
  title: string,
  description: string
}

const Meta: FC<IMeta> = ({title, description})  => {
  return(
    <Head>
      <title>{title}</title>
      <meta itemProp="description" name="description" content={description}/>
    </Head>
  )
}

export default Meta;