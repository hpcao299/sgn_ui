import { ProductItem } from '@/components/elements';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './RelatedProducts.module.css';

const cx = classNames.bind(styles);

const RelatedProducts: React.FC = () => {
    return (
        <div className={cx('related')}>
            <div className="container">
                <h5>Sản phẩm liên quan</h5>
                <div className={cx('list')}>
                    <div className={cx('list-item')}>
                        <ProductItem />
                    </div>
                    <div className={cx('list-item')}>
                        <ProductItem />
                    </div>
                    <div className={cx('list-item')}>
                        <ProductItem />
                    </div>
                    <div className={cx('list-item')}>
                        <ProductItem />
                    </div>
                    <div className={cx('list-item')}>
                        <ProductItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProducts;
