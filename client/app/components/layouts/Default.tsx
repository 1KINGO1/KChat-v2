import {FC, PropsWithChildren} from 'react';
import styles from './Default.module.scss';

const Default: FC<PropsWithChildren> = ({ children }) => {
    return(
       <main className={styles.mainWrapper}>
         {children}
       </main>
    )
};

export default Default;
