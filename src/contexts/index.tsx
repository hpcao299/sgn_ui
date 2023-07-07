import React from 'react';
import AuthContextProvider from './AuthContext';

interface ContextProvidersProps {
    children: React.ReactNode;
}

const ContextProviders: React.FC<ContextProvidersProps> = ({ children }) => {
    return <AuthContextProvider>{children}</AuthContextProvider>;
};

export default ContextProviders;
