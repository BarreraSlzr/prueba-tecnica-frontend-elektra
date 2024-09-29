import * as React from 'react';
import styles from './styles.module.scss';
import { Bell, BellDot } from 'lucide-react';

export interface INotificationBellProps {
    notifications: number
}

export default function NotificationBell({ notifications }: INotificationBellProps) {
    return (
        <a href='#messages' className={styles.NotificationBell}>
            {notifications > 0
                ? (
                    <>
                        <BellDot />
                        <span className={styles.count}>
                            {notifications}
                        </span>
                    </>
                )
                : <Bell/>
            }
        </a>
    );
};
