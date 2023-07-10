import productsApi from '@/api/productsApi';
import { Loader, ProductItem } from '@/components/elements';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './Products.module.css';

const cx = classNames.bind(styles);

const ProductsList: React.FC = () => {
    const [searchParams] = useSearchParams();
    const categorySlug = searchParams.get('category') || undefined;
    const filter = searchParams.get('filter') || undefined;
    const { data: newArrivals, isLoading, error } = productsApi.useProducts(categorySlug, filter);

    return (
        <>
            {error && <p style={{ textAlign: 'center', fontSize: '22px' }}>{error.message}</p>}
            {isLoading && <Loader className={cx('loader')} />}
            <div className={cx('products-list', isLoading && 'loading')}>
                {newArrivals?.data.map((item: Product) => (
                    <div key={item.id} className={cx('products-item')}>
                        <ProductItem data={item} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default ProductsList;
