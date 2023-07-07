/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-empty-function */
import { auth } from '@/config/firebase';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextValues {
    currentUser: unknown;
    signUp: (email: string, password: string) => Promise<unknown>;
    login: (email: string, password: string) => Promise<unknown>;
    signOut: () => Promise<unknown>;
}

const defaultValues = {
    currentUser: null,
    signUp: () => Promise.resolve(),
    login: () => Promise.resolve(),
    signOut: () => Promise.resolve(),
};

export const AuthContext = createContext<AuthContextValues>(defaultValues);
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<unknown>(null);

    const signUp = async (email: string, password: string) => {
        try {
            const userCredential = await auth.createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setCurrentUser(user);
            return Promise.resolve(user);
        } catch (error) {
            return Promise.reject(error);
        }
    };

    const login = async (email: string, password: string) => {
        try {
            const userCredential = await auth.signInWithEmailAndPassword(email, password);
            const user = userCredential.user;
            setCurrentUser(user);
            return Promise.resolve(user);
        } catch (error: any) {
            return Promise.reject(error);
        }
    };

    const signOut = async () => {
        try {
            await auth.signOut();
            return Promise.resolve();
        } catch (error) {
            return Promise.reject(error);
        }
    };

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);
            }
        });
    }, []);

    console.log('currentUser: ', currentUser);

    const values = { currentUser, signUp, login, signOut };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
