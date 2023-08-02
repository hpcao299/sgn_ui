import Sidebar from '@/components/layouts/Sidebar';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Products.module.css';
import ProductsList from './ProductsList';
import FilterSelect from './components/FilterSelect';
import PageHeader from './components/PageHeader';
import { Helmet } from 'react-helmet';
import meta from '@/constants/meta';
import config from '@/config';

const cx = classNames.bind(styles);

const ProductsPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>{meta.title.products}</title>
                <meta property="og:title" content={meta.title.products} />
                <meta name="description" content={meta.desc.products} />
                <meta property="og:description" content={meta.desc.products} />
                <link rel="canonical" href={config.routes.products} />
                <meta property="og:url" content={window.location.origin + config.routes.products} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <PageHeader />
            <div className={cx('content')}>
                <div className="container flex">
                    <div>
                        <Sidebar className={cx('sidebar')} />
                    </div>
                    <div className={cx('products-container')}>
                        <FilterSelect />
                        <ProductsList />
                        {/* <Pagination /> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
