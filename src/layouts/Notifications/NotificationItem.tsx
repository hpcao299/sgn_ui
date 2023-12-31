'use client';

import CheckIcon from '@/assets/icons/check.svg';
import CloseIcon from '@/assets/icons/close.svg';
import ErrorIcon from '@/assets/icons/error.svg';
import useNotifyStore, { Notification } from '@/stores/useNotifyStore';
import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import styles from './Notifications.module.css';

const cx = classNames.bind(styles);

interface NotificationItemProps {
    data: Notification;
}

const NotificationItem: React.FC<NotificationItemProps> = ({ data }) => {
    const removeNotification = useNotifyStore(state => state.removeNotification);

    useEffect(() => {
        const animationDurationAndDelayTime = 3600;

        const timer = setTimeout(() => {
            removeNotification(data.id);
        }, animationDurationAndDelayTime);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data.id]);

    return (
        <div className={cx('notification-item', data.type)}>
            <div className={cx('notification-icon')}>
                {data.type === 'success' && <CheckIcon />}
                {data.type === 'error' && <ErrorIcon />}
                {data.type === 'info' && <ErrorIcon />}
            </div>
            <div className={cx('notification-body')}>
                <h1 className={cx('notification__title')}>{data.title}</h1>
                <h2 className={cx('notification__msg')}>{data.message}</h2>
            </div>
            <div className={cx('notification-close')} onClick={() => removeNotification(data.id)}>
                <CloseIcon />
            </div>
        </div>
    );
};

export default NotificationItem;
