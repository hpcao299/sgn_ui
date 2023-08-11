import config from '@/config';
import meta from '@/constants/meta';
import { getNewArrivals } from '@/libs/products';
import { Metadata, NextPage } from 'next';
import React from 'react';
import ProductsList from '../ProductsList/ProductsList';

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

const ProductsPage: NextPage = async () => {
    const { data } = await getNewArrivals();

    return (
        <>
            <h1 style={{ position: 'fixed', top: '-100px' }}>{meta.title.products}</h1>
            <ProductsList data={data} />
        </>
    );
};

export default ProductsPage;
