import React from 'react';
import styles from './Users.module.css';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const UsersPage: React.FC = () => {
    return (
        <div>
            <h5 className="section-heading">Khách hàng tiềm năng</h5>
            <div>
                <div className={cx('user-item', 'user-header')}>
                    <div>ID</div>
                    <div>Tên khách hàng</div>
                    <div>Số điện thoại</div>
                    <div>Tổng đơn hàng</div>
                    <div>Tổng tiền</div>
                </div>
                <div className={cx('user-item')}>
                    <div>1</div>
                    <div>Phuc Cao</div>
                    <div>0901547769</div>
                    <div>12</div>
                    <div>12,000,000 VNĐ</div>
                </div>
                <div className={cx('user-item')}>
                    <div>1</div>
                    <div>Phuc Cao</div>
                    <div>0901547769</div>
                    <div>12</div>
                    <div>12,000,000 VNĐ</div>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
