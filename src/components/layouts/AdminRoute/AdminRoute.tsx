import { useAuthContext } from '@/contexts/AuthContext';
import React from 'react';

interface AdminRouteProps {
    children: React.ReactNode;
}

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const { currentUser } = useAuthContext();

    return (
        <>
            {currentUser?.is_admin ? (
                children
            ) : (
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100vw',
                        height: '100vh',
                        fontSize: '20px',
                        fontWeight: 600,
                    }}
                >
                    Tài khoản admin không hợp lệ
                </div>
            )}
        </>
    );
};

export default AdminRoute;
