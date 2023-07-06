import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.css';
import config from '@/config';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const links = [
    { title: 'Thùng Carton - Hộp Carton', to: config.routes.home },
    { title: 'Bong Bóng Khí - Xốp Hơi', to: config.routes.home },
    { title: 'Bóng Keo - PE', to: config.routes.home },
    { title: 'Túi Giấy KRAFT', to: config.routes.home },
    { title: 'Túi Niêm Phong', to: config.routes.home },
    { title: 'Giấy Photocopy - Tập Học Sinh', to: config.routes.home },
    { title: 'Giấy Gói Hàng', to: config.routes.home },
];

const Sidebar: React.FC = () => {
    return (
        <div className={cx('sidebar')}>
            <ul className={cx('list')}>
                {links.map((link, i) => (
                    <li key={i} className={cx('list-item')}>
                        <Link to={link.to}>{link.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
