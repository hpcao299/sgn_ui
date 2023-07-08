import config from '@/config';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    // Use this beside currentUser global state
    // because localStorage key is mostly handled by app
    // So give this value is more suitable for UI/UX
    // If user force delete it but have logged in,
    // It will navigate to login page and logic in login page navigate back to home page
    const { isSignedIn } = JSON.parse(localStorage.getItem('auth') || '{"isSignedIn": false}');
    const navigate = useNavigate();

    useEffect(() => {
        if (!isSignedIn) return navigate(config.routes.login);
    }, [isSignedIn, navigate]);

    return isSignedIn ? children : null;
};

export default PrivateRoute;
