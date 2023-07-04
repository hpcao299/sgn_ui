import React from 'react';

interface PrivateRouteProps {
    children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    return (
        <>
            <p>PrivateRoute</p>
            {children}
        </>
    );
};

export default PrivateRoute;
