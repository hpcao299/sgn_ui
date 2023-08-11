import { Sidebar } from '@/layouts';
import React, { Suspense } from 'react';
import styles from './ProductsLayout.module.css';
import classNames from 'classnames/bind';
import { PageDetails } from '@/components';
import FilterSelect from './FilterSelect';
import { Metadata } from 'next';
import meta from '@/constants/meta';
import config from '@/config';

const cx = classNames.bind(styles);

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

const ProductsPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PageDetails title="San Pahm" />
            <div className={cx('content')}>
                <div className="container flex">
                    <div>
                        <Sidebar className={cx('sidebar')} />
                    </div>
                    <div className={cx('products-container')}>
                        <FilterSelect />
                        <Suspense>{children}</Suspense>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPageLayout;
