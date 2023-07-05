import { ReactComponent as AlignLeftIcon } from '@/assets/icons/alignLeft.svg';
import { ReactComponent as BagIcon } from '@/assets/icons/bag.svg';
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import logo from '@/assets/images/sgn-logo.png';
import config from '@/config';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Search from './Search';
import whiteLogo from '@/assets/images/white-logo.png';

const cx = classNames.bind(styles);

const headerLinks = [
    {
        title: 'Trang chủ',
        to: config.routes.home,
    },
    { title: 'Sản phẩm', to: config.routes.products },
    { title: 'Giới thiệu', to: config.routes.info },
    { title: 'dịch vụ', to: config.routes.service },
    { title: 'tin tức', to: config.routes.new },
    { title: 'liên hệ', to: config.routes.contact },
];

const Header: React.FC = () => {
    const [changeLogo, setChangeLogo] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const subHeaderScrollY = 90;
            if (window.scrollY >= subHeaderScrollY) {
                setChangeLogo(true);
            } else {
                setChangeLogo(false);
            }
        };

        document.addEventListener('scroll', handleScroll);

        return () => document.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={cx('top-header', 'container')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home}>
                        <img src={logo} alt="SGN Logo" />
                    </Link>
                </div>
                <div className={cx('actions')}>
                    <Search />
                    <a href="tel:+84901338974" className={cx('phone')}>
                        <PhoneIcon />
                        <span>090 1338974</span>
                    </a>
                </div>
            </div>

            <div className={cx('sub-header')}>
                <div className={cx('container', 'sub-header-content')}>
                    {changeLogo ? (
                        <a href="#">
                            <img src={whiteLogo} alt="SGN Logo" className={cx('white-logo')} />
                        </a>
                    ) : (
                        <div className={cx('product-categories')}>
                            <AlignLeftIcon />
                            <span>DANH MỤC SẢN PHẨM</span>
                        </div>
                    )}
                    <div className={cx('header-links')}>
                        {headerLinks.map((link, index) => (
                            <Link key={index} to={link.to} className={cx('header-text-link')}>
                                {link.title}
                            </Link>
                        ))}
                        <Link to={config.routes.home} className={cx('header-icon-link')}>
                            <UserIcon />
                        </Link>
                        <Link to={config.routes.cart} className={cx('header-icon-link')}>
                            <BagIcon className={cx('bag-icon')} />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
