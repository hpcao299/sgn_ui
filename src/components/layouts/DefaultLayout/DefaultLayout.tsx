import React from 'react';

interface DefaultLayoutProps {
    children: React.ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
    return <main>{children}</main>;
};

export default DefaultLayout;
