import * as React from 'react';
import styles from './styles.module.scss';
import { AtSign, UserCircle2 } from 'lucide-react';
import Avatar from '../../components/Avatar';
import { useFetchedData } from '../../contexts/FetchedData';
import NotificationBell from '../../components/NotificationBell';

export interface ISidebarProps {
}

export default function Sidebar(props: ISidebarProps) {
    const data = useFetchedData();
    return (
        <div className={styles.container}>
            <a href='#company' className={styles.company + ' p-2'}>
                <AtSign />
                <h1>Biométricos</h1>
            </a>
            <div className={styles.command}>
                <div className={`${styles.action} ${styles.notification}`}>
                    <NotificationBell notifications={data.notifications.length} />
                </div>
                <a href='#profile' className={styles.command + " p-1"}>
                    <div className={styles.profile}>
                        <b>{data.user.name}</b>
                        <p>{data.user.type}</p>
                    </div>
                    <div className={`${styles.action} ${styles.avatar}`}>
                        <Avatar src={data.user.avatar} placeholder={<UserCircle2 />}
                            alt={data.user.name} size={30} />
                    </div>
                </a>
            </div>
        </div>
    );
}
