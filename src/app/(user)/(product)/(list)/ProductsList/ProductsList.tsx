import { ProductItem } from '@/components';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductsList.module.css';

const cx = classNames.bind(styles);

interface ProductsListProps {
    data: Product[];
}

const ProductsList: React.FC<ProductsListProps> = ({ data }) => {
    return (
        <div className={cx('products-list')}>
            {data.map(item => (
                <div key={item.id} className={cx('products-item')}>
                    <ProductItem data={item} />
                </div>
            ))}
        </div>
    );
};

export default ProductsList;
