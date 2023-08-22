import { PageDetails } from '@/components';
import config from '@/config';
import meta from '@/constants/meta';
import { Metadata, NextPage } from 'next';
import React from 'react';
import styles from './UpdateProfile.module.css';
import classNames from 'classnames/bind';
import UpdateProfileForm from './UpdateProfileForm';

const cx = classNames.bind(styles);

export const metadata: Metadata = {
    title: meta.title.profileUpdate,
    description: meta.desc.profileUpdate,
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.profileUpdate}` },
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: meta.title.profileUpdate,
        description: meta.desc.profileUpdate,
        url: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.profileUpdate}`,
        type: 'website',
        locale: 'vi_VN',
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { title: 'Thông tin cá nhân', to: config.routes.profile },
    { to: config.routes.profileUpdate, title: 'Cập nhật thông tin' },
];

const UpdateProfilePage: NextPage = () => {
    return (
        <>
            <PageDetails title="Cập nhật thông tin" paths={paths} />
            <div className={cx('container')}>
                <UpdateProfileForm />
            </div>
        </>
    );
};

export default UpdateProfilePage;
