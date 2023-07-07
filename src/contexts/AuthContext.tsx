import { auth } from '@/config/firebase';
import React, { createContext, useContext, useEffect, useState } from 'react';

export const AuthContext = createContext({});
// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => useContext(AuthContext);

interface AuthContextProviderProps {
    children: React.ReactNode;
}

const AuthContextProvider: React.FC<AuthContextProviderProps> = ({ children }) => {
    const [currentUser, setCurrentUser] = useState<unknown>(null);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);
            }
        });
    }, []);

    console.log(currentUser);

    const values = { currentUser };

    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
