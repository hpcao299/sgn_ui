import { Loader } from '@/components/elements';
import { RecentOrderDetail } from '@/types';
import { formattedDate, formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import orderApi from '../api/orderApi';
import styles from './Orders.module.css';

const cx = classNames.bind(styles);

const OrdersPage: React.FC = () => {
    const { data, isLoading } = orderApi.useOrdersList();
    const ordersList: RecentOrderDetail[] = data?.data;

    return (
        <div>
            <h5 className="section-heading">Đơn hàng</h5>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <div className={cx('orders-list')}>
                    <div className={cx('order-item', 'order-header')}>
                        <div>ID</div>
                        <div>Tên người đặt</div>
                        <div>Số điện thoại</div>
                        <div>Tổng tiền</div>
                        <div>Đặt vào</div>
                    </div>
                    {ordersList.map(order => (
                        <Link
                            key={order.id}
                            to={`/admin/orders/${order.id}`}
                            className={cx('order-item')}
                        >
                            <div>{order.id}</div>
                            <div>{order.name}</div>
                            <div>{order.phone}</div>
                            <div>{formattedPrice(order.total)}</div>
                            <div>{formattedDate(order.orderred_at)}</div>
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default OrdersPage;
