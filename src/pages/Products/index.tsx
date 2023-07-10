import Sidebar from '@/components/layouts/Sidebar';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Products.module.css';
import ProductsList from './ProductsList';
import FilterSelect from './components/FilterSelect';
import PageHeader from './components/PageHeader';

const cx = classNames.bind(styles);

const ProductsPage: React.FC = () => {
    return (
        <>
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
