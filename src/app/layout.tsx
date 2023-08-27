import React from 'react';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: 'normal',
    subsets: ['vietnamese'],
    display: 'swap',
});

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="vi">
            <body className={roboto.className}>{children}</body>
        </html>
    );
};

export default RootLayout;
