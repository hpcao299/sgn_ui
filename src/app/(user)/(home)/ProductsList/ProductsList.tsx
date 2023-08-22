'use client';

import { ProductItem } from '@/components';
import { ProductItemSkeleton } from '@/components/ProductItem';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './ProductsList.module.css';

const cx = classNames.bind(styles);

const SliderProductsList = dynamic(() => import('../SliderProductsList'), {
    loading: () => (
        <div className={cx('products-list')}>
            <div className={cx('product-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('product-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('product-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('product-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('product-item')}>
                <ProductItemSkeleton />
            </div>
        </div>
    ),
});

interface ProductsListProps {
    data: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
    const isMobile = useMediaQuery({ query: '(max-width: 739px)' });

    return (
        <>
            {isMobile ? (
                <div className={cx('products-list')}>
                    {data?.map(item => (
                        <div className={cx('product-item')} key={item.id}>
                            <ProductItem data={item} />
                        </div>
                    ))}
                </div>
            ) : (
                <SliderProductsList data={data} />
            )}
        </>
    );
};

export default ProductsList;
