'use client';

import { Loader, ProductItem } from '@/components';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './RelatedProducts.module.css';
import productsApi from '@/apis/productsApi';

interface RelatedProductsProps {
    slug: string;
}

const cx = classNames.bind(styles);

const RelatedProducts: React.FC<RelatedProductsProps> = ({ slug }) => {
    const { data, isLoading } = productsApi.useRelatedProducts(slug);

    return (
        <div className={cx('related', isLoading && 'loading')}>
            <div className="container">
                <h2 className={cx('title')}>Sản phẩm liên quan</h2>
                {isLoading ? (
                    <Loader className={cx('loader')} />
                ) : (
                    <div className={cx('list')}>
                        {data.data.map((item: Product) => (
                            <div key={item.id} className={cx('list-item')}>
                                <ProductItem data={item} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default RelatedProducts;
