import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Notifications = React.lazy(() => import('@/components/elements/Notifications'));

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ position: 'relative', minHeight: '100vh' }}>{children}</main>
            <Footer />
            <Notifications />
        </>
    );
};

export default DefaultLayout;
