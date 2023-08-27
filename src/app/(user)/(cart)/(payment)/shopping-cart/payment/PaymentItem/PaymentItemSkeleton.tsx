import React from 'react';
import styles from './PaymentItem.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PaymentItemSkeleton: React.FC = () => {
    return (
        <div className={cx('item', 'loading')}>
            <div className={cx('item-img')}>
                <div className={cx('product-img')}></div>
            </div>
            <div className={cx('item-details')}>
                <div className={cx('item-info')}>
                    <div>
                        <div className={cx('item-title')}></div>
                        <div className={cx('item-quantity')}></div>
                    </div>
                    <div className={cx('item-total')}></div>
                </div>
            </div>
        </div>
    );
};

export default PaymentItemSkeleton;
