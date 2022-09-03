import {FC} from 'react';
import Form from './components/Form/Form';
import styles from './HomePage.module.scss';

const HomePage: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Form />
    </div>
  )

};

export default HomePage;
