/* eslint-disable @typescript-eslint/no-empty-function */
import config from '@/config';
import { auth } from '@/config/firebase';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextValues {
    currentUser: unknown;
    signUp: (email: string, password: string) => unknown;
    login: (email: string, password: string) => unknown;
    signOut: () => unknown;
}

const defaultValues = {
    currentUser: null,
    signUp: () => {},
    login: () => {},
    signOut: () => {},
};

export const AuthContext = createContext<AuthContextValues>(defaultValues);
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<unknown>(null);

    const signUp = (email: string, password: string) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setCurrentUser(user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const login = (email: string, password: string) => {
        auth.signInWithEmailAndPassword(email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setCurrentUser(user);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const signOut = () => {
        auth.signOut()
            .then(() => {
                console.log('signed out');
                navigate(config.routes.home);
            })
            .catch(error => {
                console.error(error);
            });
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
