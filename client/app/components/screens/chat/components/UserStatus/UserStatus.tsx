import {FC} from 'react';
import styles from './UserStatus.module.scss';

interface IUserStatus{
    status: 'online' | 'offline'
}

const UserStatus: FC<IUserStatus> = ({status}) => {

    let className;

    switch (status){
        case 'online': {
            className = styles.wrapper_online;
            break;
        }
        case 'offline': {
            className = styles.wrapper_offline;
            break;
        }
        default: {

        }
    }

    return(
       <div className={className} />
    )
};

export default UserStatus;
