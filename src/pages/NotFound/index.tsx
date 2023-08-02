import React from 'react';
import styles from './NotFound.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import config from '@/config';
import { Helmet } from 'react-helmet';
import meta from '@/constants/meta';

const cx = classNames.bind(styles);

const NotFoundPage: React.FC = () => {
    return (
        <div className={cx('not-found')}>
            <Helmet>
                <title>{meta.title.notFound}</title>
            </Helmet>

            <div className={cx('not-found-title')}>Trang không được tìm thấy</div>
            <Link to={config.routes.home}>Quay về trang chủ</Link>
        </div>
    );
};

export default NotFoundPage;
