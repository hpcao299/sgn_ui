import config from '@/config';
import meta from '@/constants/meta';
import { Metadata, NextPage } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: meta.title.products,
    description: meta.desc.products,
    alternates: { canonical: `${process.env.APP_URL}${config.routes.products}` },
    openGraph: {
        title: meta.title.products,
        description: meta.desc.products,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.APP_URL}${config.routes.products}`,
    },
};

const ProductsPage: NextPage = () => {
    return <div>ProductsPage</div>;
};

export default ProductsPage;
