import { Loader, ProductItem } from '@/components/elements';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductsList.module.css';

const cx = classNames.bind(styles);

interface ProductsListProps {
    data: Product[];
    isLoading: boolean;
}

const ProductsList: React.FC<ProductsListProps> = ({ data, isLoading }) => {
    return (
        <>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <div className={cx('products-list')}>
                    {data?.map(item => (
                        <div className={cx('product-item')} key={item.id}>
                            <ProductItem data={item} />
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default ProductsList;
