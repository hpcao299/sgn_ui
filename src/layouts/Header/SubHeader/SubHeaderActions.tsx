'use client';

import BagIcon from '@/assets/icons/bag.svg';
import UserIcon from '@/assets/icons/user.svg';
import config from '@/config';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { memo } from 'react';
import styles from './SubHeader.module.css';
import { useAuthStore } from '@/stores';

const cx = classNames.bind(styles);

const SubHeaderActions: React.FC = () => {
    const currentUser = useAuthStore(state => state.currentUser);

    return (
        <>
            {currentUser ? (
                currentUser.is_admin ? (
                    <>
                        <Link
                            href={config.routes.admin}
                            className={cx('header-text-link', 'admin-link')}
                        >
                            Trang Admin
                        </Link>
                        <Link href={config.routes.profile} className={cx('header-icon-link')}>
                            <UserIcon />
                        </Link>
                    </>
                ) : (
                    <>
                        <Link href={config.routes.profile} className={cx('header-icon-link')}>
                            <UserIcon />
                        </Link>
                        <Link href={config.routes.cart} className={cx('header-icon-link')}>
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
                <Link href={config.routes.login} className={cx('header-text-link', 'header-login')}>
                    Đăng nhập
                </Link>
            )}
        </>
    );
};

export default memo(SubHeaderActions);
