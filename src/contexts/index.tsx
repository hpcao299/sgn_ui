import React from 'react';
import AuthContextProvider from './AuthContext';

const NotifyContextProvider = React.lazy(() => import('./NotifyContext'));

interface ContextProvidersProps {
    children: React.ReactNode;
}

const ContextProviders: React.FC<ContextProvidersProps> = ({ children }) => {
    return (
        <AuthContextProvider>
            <NotifyContextProvider>{children}</NotifyContextProvider>
        </AuthContextProvider>
    );
};

export default ContextProviders;
