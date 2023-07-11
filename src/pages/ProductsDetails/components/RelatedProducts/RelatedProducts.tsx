import productsApi from '@/api/productsApi';
import { Loader, ProductItem } from '@/components/elements';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './RelatedProducts.module.css';

const cx = classNames.bind(styles);

const RelatedProducts: React.FC = () => {
    const params = useParams();
    const { data, isLoading } = productsApi.useRelatedProducts(params.slug || '');

    return (
        <div className={cx('related', isLoading && 'loading')}>
            {isLoading ? (
                <Loader className={cx('loader')} />
            ) : (
                <div className="container">
                    <h5>Sản phẩm liên quan</h5>
                    <div className={cx('list')}>
                        {data.data.map((item: Product) => (
                            <div key={item.id} className={cx('list-item')}>
                                <ProductItem data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default RelatedProducts;
