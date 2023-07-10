import React, { memo, useMemo } from 'react';
import OrderItem from './components/OrderItem';
import orderApi from '@/api/orderApi';
import { HasOrderProduct, Order } from '@/types';
import transformedData from './transformedData';
import { Loader } from '@/components/elements';
import styles from './Profile.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const OrdersList: React.FC = () => {
    const { data, isLoading } = orderApi.getOrdersList();
    const itemsList: HasOrderProduct[] = data?.data;
    const orderItems: Order[] = useMemo(() => transformedData(itemsList || []), [itemsList]);

    return (
        <>
            {orderItems.length === 0 && (
                <div style={{ textAlign: 'center', fontSize: '18px', marginTop: 10 }}>
                    Bạn chưa đặt đơn hàng nào.
                </div>
            )}
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
