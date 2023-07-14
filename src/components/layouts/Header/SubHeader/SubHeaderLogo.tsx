import { ReactComponent as AlignLeftIcon } from '@/assets/icons/alignLeft.svg';
import { ReactComponent as MenuIcon } from '@/assets/icons/menu.svg';
import whiteLogo from '@/assets/images/white-logo.png';
import classNames from 'classnames/bind';
import { memo, useEffect, useState } from 'react';
import styles from './SubHeader.module.css';

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
            <div className={cx('mobile-menu-icon')}>
                <MenuIcon />
            </div>
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
        </>
    );
};

export default memo(SubHeaderLogo);
