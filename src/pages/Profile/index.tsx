import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useAuthContext } from '@/contexts/AuthContext';
import { useNotifyContext } from '@/contexts/NotifyContext';
import classNames from 'classnames/bind';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OrdersList from './OrdersList';
import styles from './Profile.module.css';
import { Helmet } from 'react-helmet';

const cx = classNames.bind(styles);

const paths = [
    { title: 'Trang chủ', to: config.routes.home },
    { title: 'Thông tin cá nhân', to: config.routes.profile },
];

const ProfilePage: React.FC = () => {
    const { addNewNotification } = useNotifyContext();
    const { signOut, currentUser } = useAuthContext();
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut();
            navigate(config.routes.home);
        } catch (error) {
            addNewNotification(constants.notifications.SIGN_OUT_FAILED);
            console.error(error);
        }
    };

    return (
        <>
            <Helmet>
                <title>{currentUser?.name}</title>
            </Helmet>

            <PageDetails title="Thông tin cá nhân" paths={paths} />
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
                        <Link to={config.routes.profileUpdate}>
                            <Button>Cập nhật thông tin</Button>
                        </Link>
                        <Button color="red" variant="outlined" onClick={handleSignOut}>
                            Đăng xuất
                        </Button>
                    </div>
                </div>
                <div className={cx('products-list')}>
                    <h5>Đơn hàng đã đặt</h5>
                    <OrdersList />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
