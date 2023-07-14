import { adminFetcher } from '@/api/axiosClient';
import { Loader } from '@/components/elements';
import { useAuthContext } from '@/contexts/AuthContext';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { SWRConfig } from 'swr';

interface AdminRouteProps {
    children: React.ReactNode;
}

const MILLISECONDS_IN_2_SECONDS = 2 * 1000;

const AdminRoute: React.FC<AdminRouteProps> = ({ children }) => {
    const { currentUser } = useAuthContext();

    return (
        <>
            <Helmet>
                <title>Admin của SGN</title>
            </Helmet>

            <Suspense
                fallback={
                    <div className="global-loader">
                        <Loader size="medium" />
                    </div>
                }
            >
                <SWRConfig
                    value={{ dedupingInterval: MILLISECONDS_IN_2_SECONDS, fetcher: adminFetcher }}
                >
                    {currentUser?.is_admin ? (
                        children
                    ) : (
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flex: 1,
                                height: '100vh',
                                fontSize: '20px',
                                fontWeight: 600,
                            }}
                        >
                            Tài khoản admin không hợp lệ
                        </div>
                    )}
                </SWRConfig>
            </Suspense>
        </>
    );
};

export default AdminRoute;
