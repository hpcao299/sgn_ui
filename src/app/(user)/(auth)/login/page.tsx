import { PageDetails } from '@/components';
import config from '@/config';
import meta from '@/constants/meta';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Login.module.css';
import { Metadata, NextPage } from 'next';
import LoginForm from './LoginForm';

const cx = classNames.bind(styles);

export const metadata: Metadata = {
    title: meta.title.login,
    description: meta.desc.login,
    alternates: { canonical: `${process.env.APP_URL}${config.routes.login}` },
    openGraph: {
        title: meta.title.login,
        description: meta.desc.login,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.APP_URL}${config.routes.login}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.login, title: 'Đăng nhập' },
];

const LoginPage: NextPage = () => {
    return (
        <>
            <PageDetails title="Đăng nhập" paths={paths} />
            <div className={cx('container')}>
                <LoginForm />
            </div>
        </>
    );
};

export default LoginPage;
