import logo from '@/assets/images/sgn-logo.png';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './AdminLayout.module.css';

const cx = classNames.bind(styles);

interface AdminLayoutProps {
    children: React.ReactNode;
}

const links = [
    { title: 'Thống kê', to: config.routes.admin },
    { title: 'Sản phẩm', to: config.routes.adminProducts },
    { title: 'Đơn hàng', to: config.routes.adminProductDetails },
    { title: 'Khách hàng', to: config.routes.adminUsers },
];

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    const location = useLocation();

    return (
        <div className={cx('wrapper')}>
            <nav className={cx('sidebar')}>
                <div className={cx('sidebar-header')}>
                    <img src={logo} alt="SGN Logo" className={cx('sidebar-logo')} />
                </div>
                <ul className={cx('sidebar-links')}>
                    {links.map((link, i) => (
                        <li key={i}>
                            <Link
                                to={link.to}
                                className={cx(location.pathname === link.to && 'active')}
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className={cx('sidebar-home-link')}>
                    <Link to={config.routes.home}>Quay về trang mua sắm</Link>
                </div>
            </nav>
            <main style={{ flex: 1 }}>{children}</main>
        </div>
    );
};

export default AdminLayout;
