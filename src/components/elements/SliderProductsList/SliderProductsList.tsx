import React from 'react';
import { ProductItem } from '@/components/elements';
import classNames from 'classnames/bind';
import styles from './SliderProductsList.module.css';

const cx = classNames.bind(styles);

// interface SliderProductsListProps {}

const SliderProductsList: React.FC = () => {
    return (
        <div className={cx('container')}>
            <div className={cx('item')}>
                <ProductItem />
            </div>
            <div className={cx('item')}>
                <ProductItem />
            </div>
            <div className={cx('item')}>
                <ProductItem />
            </div>
            <div className={cx('item')}>
                <ProductItem />
            </div>
            <div className={cx('item')}>
                <ProductItem />
            </div>
        </div>
    );
};

export default SliderProductsList;
