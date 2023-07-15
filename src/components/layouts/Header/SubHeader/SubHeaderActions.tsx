import { ReactComponent as BagIcon } from '@/assets/icons/bag.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import config from '@/config';
import { useAuthContext } from '@/contexts/AuthContext';
import classNames from 'classnames/bind';
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styles from './SubHeader.module.css';
import { Button } from '@/components/elements';

const cx = classNames.bind(styles);

const SubHeaderActions: React.FC = () => {
    const { currentUser } = useAuthContext();

    return (
        <>
            {currentUser ? (
                currentUser.is_admin ? (
                    <Link to={config.routes.admin} className={cx('header-text-link')}>
                        Trang Admin
                    </Link>
                ) : (
                    <>
                        <Link to={config.routes.profile} className={cx('header-icon-link')}>
                            <UserIcon />
                        </Link>
                        <Link to={config.routes.cart} className={cx('header-icon-link')}>
                            <div className={cx('header-bag')}>
                                <BagIcon className={cx('bag-icon')} />
                                {currentUser.num_items !== undefined &&
                                    currentUser.num_items > 0 && (
                                        <span className={cx('header-bag-count')}>
                                            {currentUser.num_items}
                                        </span>
                                    )}
                            </div>
                        </Link>
                    </>
                )
            ) : (
                <Link to={config.routes.login} className={cx('header-text-link', 'header-login')}>
                    Đăng nhập
                </Link>
            )}
        </>
    );
};

export default memo(SubHeaderActions);
