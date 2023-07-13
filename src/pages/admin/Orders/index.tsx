import React from 'react';
import styles from './Orders.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const OrdersPage: React.FC = () => {
    return (
        <div>
            <h5 className="section-heading">Đơn hàng</h5>
            <div className={cx('orders-list')}>
                <div className={cx('order-item', 'order-header')}>
                    <div>ID</div>
                    <div>Tên người đặt</div>
                    <div>Số điện thoại</div>
                    <div>Tổng tiền</div>
                    <div>Đặt vào</div>
                </div>
                <div className={cx('order-item')}>
                    <div>1</div>
                    <div>Phuc Cao</div>
                    <div>0901547769</div>
                    <div>5,000,000 VND</div>
                    <div>21:47 12/7/2023</div>
                </div>
                <div className={cx('order-item')}>
                    <div>1</div>
                    <div>Phuc Cao</div>
                    <div>0901547769</div>
                    <div>5,000,000 VND</div>
                    <div>21:47 12/7/2023</div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPage;
