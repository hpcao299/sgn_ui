import { create } from 'zustand';

export interface NotificationDetails {
    title: string;
    message: string;
    type: 'success' | 'error' | 'info';
}

export interface Notification extends NotificationDetails {
    id: number;
}

interface State {
    notifications: Notification[];
}

interface Actions {
    addNewNotification: (notification: NotificationDetails) => void;
    removeNotification: (id: number) => void;
}

const useNotifyStore = create<State & Actions>(set => ({
    notifications: [],
    addNewNotification(data) {
        set(state => ({
            notifications: [...state.notifications, { ...data, id: new Date().getTime() }],
        }));
    },
    removeNotification(id) {
        set(state => ({
            notifications: state.notifications.filter(notification => notification.id !== id),
        }));
    },
}));

export default useNotifyStore;
