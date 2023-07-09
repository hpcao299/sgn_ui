/* eslint-disable @typescript-eslint/no-empty-function */
import React, { useState } from 'react';

export interface NotificationDetails {
    title: string;
    message: string;
    type: 'success' | 'error';
}

export interface Notification extends NotificationDetails {
    id: number;
}

interface NotifyContextValues {
    notifications: Notification[];
    addNewNotification: (notification: NotificationDetails) => void;
    removeNotification: (id: number) => void;
}

const defaultValues: NotifyContextValues = {
    notifications: [],
    addNewNotification: () => {},
    removeNotification: () => {},
};

export const NotifyContext = React.createContext<NotifyContextValues>(defaultValues);
export const useNotifyContext = () => React.useContext(NotifyContext);

interface NotifyContextProps {
    children: React.ReactNode;
}

const NotifyContextProvider: React.FC<NotifyContextProps> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);

    const addNewNotification = (notification: NotificationDetails) => {
        const newNotification = { ...notification, id: new Date().getTime() };

        setNotifications(prev => [...prev, newNotification]);
    };

    const removeNotification = (id: number) => {
        setNotifications(prev => {
            const newNotifications = [...prev];

            return newNotifications.filter(notification => notification.id !== id);
        });
    };

    const values = {
        notifications,
        addNewNotification,
        removeNotification,
    };

    return <NotifyContext.Provider value={values}>{children}</NotifyContext.Provider>;
};

export default NotifyContextProvider;
