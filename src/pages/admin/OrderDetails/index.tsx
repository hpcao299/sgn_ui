import { Loader } from '@/components/elements';
import { formattedDate } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';
import orderApi from '../api/orderApi';
import styles from './OrderDetails.module.css';
import OrderItems from './OrderItems';

const cx = classNames.bind(styles);

interface OrderDetail {
    id: number;
    name: string;
    phone: string;
    address: string;
    email: string;
    message: string;
    orderred_at: string;
}

const OrderDetailsPage: React.FC = () => {
    const params = useParams();
    const { data, isLoading } = orderApi.useOrderDetails(Number(params.id));
    const details: OrderDetail = data?.data;

    return (
        <>
            <h5 className="section-heading">Thông tin đơn hàng</h5>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <>
                    <div style={{ marginBottom: '32px' }}>
                        <p className={cx('order-info')}>
                            Tên người đặt: <span>{details.name}</span>
                        </p>
                        <p className={cx('order-info')}>
                            Email: <span>{details.email}</span>
                        </p>
                        <p className={cx('order-info')}>
                            Số điện thoại: <span>{details.phone}</span>
                        </p>
                        <p className={cx('order-info')}>
                            Địa chỉ: <span>{details.address}</span>
                        </p>
                        {details.message && (
                            <p className={cx('order-info')}>
                                Lời nhắn: <span>{details.message}</span>
                            </p>
                        )}
                        <p className={cx('order-info')}>
                            Đặt vào: <span>{formattedDate(details.orderred_at)}</span>
                        </p>
                    </div>
                    <OrderItems />
                </>
            )}
        </>
    );
};

export default OrderDetailsPage;
