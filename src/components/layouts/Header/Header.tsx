import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg';
import logo from '@/assets/images/sgn-logo.png';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import Search from './Search';
import SubHeader from './SubHeader';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
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
            <SubHeader />
        </>
    );
};

export default Header;
