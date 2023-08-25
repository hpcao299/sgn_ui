import usersApi from '@/apis/usersApi';
import { auth } from '@/config/firebase';
import { CurrentUser } from '@/types';
import { create } from 'zustand';

interface State {
    currentUser: CurrentUser | null;
}

interface Actions {
    setCurrentUser: (details: { email: string; id: string }) => void;
    signUp: (email: string, password: string) => Promise<unknown>;
    login: (email: string, password: string) => Promise<unknown>;
    getCurrentUser: () => Promise<CurrentUser | null>;
    setNumItems: (count: number) => void;
    signOut: () => Promise<unknown>;
}

const useAuthStore = create<State & Actions>(set => ({
    currentUser: null,
    setCurrentUser(details) {
        set({ currentUser: details });
    },
    signUp: async (email: string, password: string) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            await usersApi.registerUser({ email: user?.email || '' });
            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(error);
        }
    },
    login: async (email: string, password: string) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            return Promise.resolve(user);
        } catch (error: any) {
            return Promise.reject(error);
        }
    },
    signOut: async () => {
        try {
            await auth.signOut();
            set({ currentUser: null });
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    },
    getCurrentUser: async () => {
        // try {
        //     const user = await usersApi.getCurrentUser();
        //     setCurrentUser(user.data);
        //     return user.data;
        // } catch (error) {
        //     console.error(error);
        // }
        return null;
    },
    setNumItems: (count: number) => {
        set(state => ({
            currentUser: { ...state.currentUser, num_items: count },
        }));
    },
}));

export default useAuthStore;
