'use client';

import AlignLeftIcon from '@/assets/icons/alignLeft.svg';
import whiteLogo from '/public/white-logo.png';
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './SubHeader.module.css';
import Image from 'next/image';

const cx = classNames.bind(styles);

const SubHeaderLogo = () => {
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
            {changeLogo ? (
                <a href="#">
                    <Image
                        src={whiteLogo}
                        width={120}
                        height={43}
                        alt="SGN Logo"
                        className={cx('white-logo')}
                    />
                </a>
            ) : (
                <div className={cx('product-categories')}>
                    <AlignLeftIcon />
                    <span>DANH MỤC SẢN PHẨM</span>
                </div>
            )}
        </>
    );
};

export default memo(SubHeaderLogo);
