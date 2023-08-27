import React from 'react';
import styles from './OrderItem.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const OrderItemSkeleton: React.FC = () => {
    return (
        <div className={cx('order', 'loading')}>
            <div className={cx('order-info')}>
                <div className={cx('order-id')}></div>
                <div className={cx('order-total')}></div>
                <div></div>
            </div>
            <div className={cx('order-products')}>
                {[1, 2, 3].map((a, i) => (
                    <div className={cx('item')} key={i}>
                        <div className={cx('item-img')}></div>
                        <div className={cx('item-info')}>
                            <div className={cx('item-title')}></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderItemSkeleton;
