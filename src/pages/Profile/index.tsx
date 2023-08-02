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
import meta from '@/constants/meta';

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
                <title>{meta.title.profile}</title>
                <meta property="og:title" content={meta.title.profile} />
                <meta name="description" content={meta.desc.profile} />
                <meta property="og:description" content={meta.desc.profile} />
                <link rel="canonical" href={config.routes.profile} />
                <meta property="og:url" content={window.location.origin + config.routes.profile} />
                <meta name="robots" content="index, follow" />
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
                    <h3>Đơn hàng đã đặt</h3>
                    <OrdersList />
                </div>
            </div>
        </>
    );
};

export default ProfilePage;
