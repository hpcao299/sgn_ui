import React from 'react';
import { Metadata } from 'next';
import meta from '@/constants/meta';
import config from '@/config';
import { PageDetails } from '@/components';

export const metadata: Metadata = {
    title: meta.title.payment,
    description: meta.desc.payment,
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.payment}` },
    openGraph: {
        title: meta.title.payment,
        description: meta.desc.payment,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.payment}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const paths = [
    {
        title: 'Trang chủ',
        to: config.routes.home,
    },
    {
        title: 'Giỏ hàng',
        to: config.routes.cart,
    },
    {
        title: 'Thanh toán',
        to: config.routes.payment,
    },
];

const PaymentPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PageDetails title="Thanh toán" paths={paths} />
            <h1 style={{ position: 'fixed', top: '-100vh' }}>{meta.title.payment}</h1>
            {children}
        </>
    );
};

export default PaymentPageLayout;
