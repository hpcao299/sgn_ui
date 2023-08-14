'use client';

import { Button, PageDetails } from '@/components';
import config from '@/config';
import classNames from 'classnames/bind';
import { NextPage } from 'next';
import Link from 'next/link';
import OrdersList from './OrdersList';
import styles from './Profile.module.css';

const cx = classNames.bind(styles);

const paths = [
    { title: 'Trang chủ', to: config.routes.home },
    { title: 'Thông tin cá nhân', to: config.routes.profile },
];

const ProfilePage: NextPage = () => {
    const currentUser = {
        name: 'Test user',
        email: 'test@gmail.com',
        phone: '0913777991',
    };

    const handleSignOut = () => {
        console.log('sign out');
    };

    return (
        <>
            <PageDetails title="Thông tin cá nhân" paths={paths} />
            <h1 style={{ position: 'fixed', top: '-100px' }}>Thông tin cá nhân</h1>
            <div className={cx('content', 'container')}>
                <div className={cx('user-details')}>
                    <h2 className={cx('user-name')}>{currentUser?.name}</h2>
                    <p>Thông tin cơ bản</p>
                    <div className={cx('user-info')}>
                        <p>
                            <span>Email:</span> {currentUser?.email}
                        </p>
                        <p>
                            <span>Số điện thoại:</span> {currentUser?.phone}
                        </p>
                    </div>
                    <div className={cx('user-actions')}>
                        <Link href={config.routes.profileUpdate}>
                            <Button>Cập nhật thông tin</Button>
                        </Link>
                        <Button color="red" variant="outlined" onClick={handleSignOut}>
                            Đăng xuất
                        </Button>
                    </div>
                </div>
                <div className={cx('orders-list-container')}>
                    <h2>Đơn hàng đã đặt</h2>
                    <OrdersList />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
