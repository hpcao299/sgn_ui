import { Loader } from '@/components/elements';
import { PotentialUser } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import userApi from '../api/userApi';
import styles from './Users.module.css';

const cx = classNames.bind(styles);

const UsersPage: React.FC = () => {
    const { data, isLoading } = userApi.usePotentialUsers();
    const usersList: PotentialUser[] = data?.data;

    return (
        <div>
            <h5 className="section-heading">Khách hàng tiềm năng</h5>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <div>
                    <div className={cx('user-item', 'user-header')}>
                        <div>Tên khách hàng</div>
                        <div>Số điện thoại</div>
                        <div>Email</div>
                        <div>Tổng đơn hàng</div>
                        <div>Tổng tiền đã mua</div>
                    </div>
                    {usersList.map(user => (
                        <div key={user.id} className={cx('user-item')}>
                            <div>{user.name}</div>
                            <div>{user.phone}</div>
                            <div>{user.email}</div>
                            <div>{user.total_orders}</div>
                            <div>{formattedPrice(user.total_bought)}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default UsersPage;
