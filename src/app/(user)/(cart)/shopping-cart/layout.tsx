import React from 'react';
import { Metadata } from 'next';
import meta from '@/constants/meta';
import config from '@/config';
import { PageDetails } from '@/components';

export const metadata: Metadata = {
    title: meta.title.cart,
    description: meta.desc.cart,
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.cart}` },
    openGraph: {
        title: meta.title.cart,
        description: meta.desc.cart,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.cart}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const paths = [
    {
        to: config.routes.home,
        title: 'Trang chủ',
    },
    {
        to: config.routes.cart,
        title: 'Giỏ hàng',
    },
];

const ShoppingCartPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PageDetails title="Giỏ hàng" paths={paths} />
            <h1 style={{ position: 'fixed', top: '-100vh' }}>Giỏ hàng của bạn</h1>
            {children}
        </>
    );
};

export default ShoppingCartPageLayout;
