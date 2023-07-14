import { Button, Loader } from '@/components/elements';
import config from '@/config';
import { RecentOrderDetail } from '@/types';
import { formattedDate, formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import statisticApi from '../api/statisticsApi';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

const OrdersStatistics: React.FC = () => {
    const { data, isLoading } = statisticApi.useOrdersStatistics();
    const ordersList: RecentOrderDetail[] = data?.data;

    return (
        <div className={cx('orders-list')}>
            <h5 className={cx('section-heading')}>Đơn hàng gần đây</h5>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <>
                    <div>
                        <div className={cx('order-item', 'order-header')}>
                            <div>ID</div>
                            <div>Tên người đặt</div>
                            <div>Số điện thoại</div>
                            <div>Tổng tiền</div>
                            <div>Đặt vào</div>
                        </div>
                        {ordersList.map(item => (
                            <Link
                                to={`/admin/orders/${item.id}`}
                                key={item.id}
                                className={cx('order-item')}
                            >
                                <div>{item.id}</div>
                                <div>{item.name}</div>
                                <div>{item.phone}</div>
                                <div>{formattedPrice(item.total)}</div>
                                <div>{formattedDate(item.orderred_at)}</div>
                            </Link>
                        ))}
                    </div>
                    <div className={cx('more-details-link')}>
                        <Link to={config.routes.adminOrders}>
                            <Button size="small" variant="outlined">
                                Xem thêm
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrdersStatistics;
