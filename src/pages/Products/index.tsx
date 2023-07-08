import productsApi from '@/api/productsApi';
import { Loader, ProductItem } from '@/components/elements';
import Sidebar from '@/components/layouts/Sidebar';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Products.module.css';
import FilterSelect from './components/FilterSelect';
import PageHeader from './components/PageHeader';
import Pagination from './components/Pagination';

const cx = classNames.bind(styles);

const ProductsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categorySlug = searchParams.get('category') || undefined;
    const filter = searchParams.get('filter') || undefined;
    const { data: newArrivals, isLoading, error } = productsApi.useProducts(categorySlug, filter);

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
                        {error && (
                            <p style={{ textAlign: 'center', fontSize: '22px' }}>{error.message}</p>
                        )}
                        {isLoading && <Loader className={cx('loader')} />}
                        <div className={cx('products-list', isLoading && 'loading')}>
                            {newArrivals?.data.map((item: Product) => (
                                <div key={item.id} className={cx('products-item')}>
                                    <ProductItem data={item} />
                                </div>
                            ))}
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
