import React, { Suspense } from 'react';
import Header from '../Header/Header';

const Footer = React.lazy(() => import('../Footer/Footer'));

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ position: 'relative', minHeight: '100vh' }}>{children}</main>
            <Suspense fallback={<div>Loading footer...</div>}>
                <Footer />
            </Suspense>
        </>
    );
};

export default DefaultLayout;
