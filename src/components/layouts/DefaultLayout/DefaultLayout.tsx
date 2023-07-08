import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return (
        <>
            <Header />
            <main style={{ position: 'relative', minHeight: '130vh' }}>{children}</main>
            <Footer />
        </>
    );
};

export default DefaultLayout;
