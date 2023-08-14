import React from 'react';
import styles from './Profile.module.css';
import classNames from 'classnames/bind';
import OrderItem from './OrderItem';

const cx = classNames.bind(styles);

const OrdersList: React.FC = () => {
    return (
        <div className={cx('orders-list')}>
            <OrderItem
                data={{
                    order_id: 1,
                    orderred_at: String(
                        'Sat Aug 12 2023 22:17:19 GMT+1000 (Australian Eastern Standard Time)',
                    ),
                    items: [],
                }}
            />
        </div>
    );
};

export default OrdersList;
