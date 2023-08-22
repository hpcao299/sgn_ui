import ChevronDown from '@/assets/icons/chevronDown.svg';
import config from '@/config';
import { Category } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import MobileMenu from '../MobileMenu';
import styles from './SubHeader.module.css';
import SubHeaderActions from './SubHeaderActions';
import SubHeaderLinks from './SubHeaderLinks';
import SubHeaderLogo from './SubHeaderLogo';
import Link from 'next/link';
import { getCategories } from '@/libs/categories';

const cx = classNames.bind(styles);

const SubHeader: React.FC = async () => {
    const data = await getCategories();

    const headerLinks = [
        {
            title: 'Trang chủ',
            to: config.routes.home,
        },
        {
            title: 'Sản phẩm',
            to: config.routes.products,
            keepParams: true,
            subHeader: data?.data.map((category: Category) => ({
                title: category.title,
                slug: category.slug,
            })),
        },
        { title: 'Giới thiệu', to: config.routes.info, nofollow: true },
        { title: 'tin tức', to: config.routes.new, nofollow: true },
        { title: 'liên hệ', to: config.routes.contact, nofollow: true },
    ];

    return (
        <div className={cx('sub-header')}>
            <div className={cx('container', 'sub-header-content')}>
                <MobileMenu links={headerLinks} />
                <SubHeaderLogo />
                <div className={cx('header-links')}>
                    {headerLinks.map((link, index) => (
                        <div key={index} className={cx('text-link-wrapper')}>
                            <Link
                                href={link.to}
                                className={cx('header-text-link')}
                                rel={link.nofollow ? 'nofollow' : ''}
                            >
                                {link.title}
                                {link.subHeader && <ChevronDown />}
                            </Link>
                            {link.subHeader && <SubHeaderLinks data={link.subHeader} />}
                        </div>
                    ))}
                    <SubHeaderActions />
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
