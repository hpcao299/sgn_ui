import PhoneIcon from '@/assets/icons/phone.svg';
import logo from '@/assets/images/sgn-logo.png';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Header.module.css';
import Search from './Search';
import SubHeader from './SubHeader';
import Link from 'next/link';
import Image from 'next/image';

const cx = classNames.bind(styles);

const Header: React.FC = () => {
    return (
        <>
            <div className={cx('top-header', 'container')}>
                <div className={cx('logo')}>
                    <Link href={config.routes.home}>
                        <Image src={logo} alt="SGN Logo" width={170} height={60} priority />
                    </Link>
                </div>
                <div className={cx('actions')}>
                    <Search />
                    <a href="tel:+84901338974" rel="nofollow" className={cx('phone')}>
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
