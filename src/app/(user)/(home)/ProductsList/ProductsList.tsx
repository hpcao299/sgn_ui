'use client';

import { Loader, ProductItem } from '@/components';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductsList.module.css';
import dynamic from 'next/dynamic';
import { useMediaQuery } from 'react-responsive';

const cx = classNames.bind(styles);

const SliderProductsList = dynamic(() => import('../SliderProductsList'), {
    ssr: false,
    loading: () => <Loader className={cx('loader')} />,
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
