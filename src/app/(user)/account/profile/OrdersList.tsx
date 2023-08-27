'use client';

import orderApi from '@/apis/orderApi';
import { ErrorHandler, Loader } from '@/components';
import { ErrorResponse, HasOrderProduct, Order } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import OrderItem from './OrderItem';
import styles from './Profile.module.css';
import transformedData from './transformedData';

const cx = classNames.bind(styles);

const OrdersList: React.FC = () => {
    const { data, isLoading, error } = orderApi.getOrdersList();
    const itemsList: HasOrderProduct[] = data?.data;
    const orderItems: Order[] = transformedData(itemsList || []);

    return (
        <>
            {!error && orderItems.length === 0 && !isLoading && (
                <div style={{ textAlign: 'center', fontSize: '18px', marginTop: 10 }}>
                    Bạn chưa đặt đơn hàng nào.
                </div>
            )}

            {error && <ErrorHandler error={error as ErrorResponse} />}
            {isLoading && <Loader className={cx('loader')} />}
            <div className={cx('orders-list', isLoading && 'loading')}>
                {orderItems.map(item => (
                    <OrderItem key={item.order_id} data={item} />
                ))}
            </div>
        </>
    );
};

export default OrdersList;
