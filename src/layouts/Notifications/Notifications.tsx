'use client';

import classNames from 'classnames/bind';
import React from 'react';
import NotificationItem from './NotificationItem';
import styles from './Notifications.module.css';
import { useNotifyStore } from '@/stores';

const cx = classNames.bind(styles);

const Notifications: React.FC = () => {
    const notifications = useNotifyStore(state => state.notifications);

    return (
        <div className={cx('notifications')}>
            {notifications.map(item => (
                <NotificationItem key={item.id} data={item} />
            ))}
        </div>
    );
};

export default Notifications;
