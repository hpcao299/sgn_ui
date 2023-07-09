/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import usersApi from '@/api/usersApi';
import { auth } from '@/config/firebase';
import { CurrentUser } from '@/types';
import React, { createContext, useCallback, useContext, useState } from 'react';

interface AuthContextValues {
    currentUser: CurrentUser | null;
    signUp: (email: string, password: string) => Promise<unknown>;
    login: (email: string, password: string) => Promise<unknown>;
    getCurrentUser: () => Promise<CurrentUser | null>;
    signOut: () => Promise<unknown>;
}

const defaultValues = {
    currentUser: null,
    signUp: () => Promise.resolve(),
    login: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
    getCurrentUser: () => Promise.resolve(null),
};

export const AuthContext = createContext<AuthContextValues>(defaultValues);
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);

    const signUp = useCallback(async (email: string, password: string) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            await usersApi.registerUser({ email: user?.email || '' });
            setCurrentUser({ email: user?.email || '', id: user?.uid || '' });
            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(error);
        }
    }, []);

    const login = useCallback(async (email: string, password: string) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            return Promise.resolve(user);
        } catch (error: any) {
            return Promise.reject(error);
        }
    }, []);

    const signOut = useCallback(async () => {
        try {
            await auth.signOut();
            setCurrentUser(null);
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    }, []);

    const getCurrentUser = useCallback(async () => {
        try {
            const user = await usersApi.getCurrentUser();
            setCurrentUser(user.data);
            return user.data;
        } catch (error) {
            console.error(error);
        }
    }, []);

    const values = { currentUser, signUp, login, signOut, getCurrentUser };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
