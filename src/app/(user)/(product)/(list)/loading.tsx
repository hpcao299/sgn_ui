import { ProductItemSkeleton } from '@/components/ProductItem';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductsLayout.module.css';

const cx = classNames.bind(styles);

const Loading: React.FC = () => {
    return (
        <div className={cx('products-list')}>
            <div className={cx('products-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('products-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('products-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('products-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('products-item')}>
                <ProductItemSkeleton />
            </div>
            <div className={cx('products-item')}>
                <ProductItemSkeleton />
            </div>
        </div>
    );
};

export default Loading;
