import orderApi from '@/api/orderApi';
import { Loader } from '@/components/elements';
import ErrorHandler from '@/components/layouts/ErrorHandler';
import { ErrorResponse, HasOrderProduct, Order } from '@/types';
import classNames from 'classnames/bind';
import React, { memo, useMemo } from 'react';
import styles from './Profile.module.css';
import OrderItem from './components/OrderItem';
import transformedData from './transformedData';

const cx = classNames.bind(styles);

const OrdersList: React.FC = () => {
    const { data, isLoading, error } = orderApi.getOrdersList();
    const itemsList: HasOrderProduct[] = data?.data;
    const orderItems: Order[] = useMemo(() => transformedData(itemsList || []), [itemsList]);

    return (
        <>
            {!error && orderItems.length === 0 && (
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

export default memo(OrdersList);
