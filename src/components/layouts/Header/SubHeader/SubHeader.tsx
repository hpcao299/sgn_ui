import categoriesApi from '@/api/categoriesApi';
import { ReactComponent as ChevronDown } from '@/assets/icons/chevronDown.svg';
import config from '@/config';
import { Category } from '@/types';
import classNames from 'classnames/bind';
import React, { useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './SubHeader.module.css';
import SubHeaderActions from './SubHeaderActions';
import SubHeaderLinks from './SubHeaderLinks';
import SubHeaderLogo from './SubHeaderLogo';

const cx = classNames.bind(styles);

const SubHeader: React.FC = () => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { data } = categoriesApi.useCategories();

    const handleNavigate = (to: string, keepParams?: boolean) => {
        const newSearchParams = new URLSearchParams(searchParams);

        navigate({ search: keepParams ? `?${newSearchParams.toString()}` : '', pathname: to });
    };

    const headerLinks = useMemo(
        () => [
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
            { title: 'Giới thiệu', to: config.routes.info },
            { title: 'dịch vụ', to: config.routes.service },
            { title: 'tin tức', to: config.routes.new },
            { title: 'liên hệ', to: config.routes.contact },
        ],
        [data],
    );

    return (
        <div className={cx('sub-header')}>
            <div className={cx('container', 'sub-header-content')}>
                <SubHeaderLogo />
                <div className={cx('header-links')}>
                    {headerLinks.map((link, index) => (
                        <div key={index} className={cx('text-link-wrapper')}>
                            <a
                                onClick={() => handleNavigate(link.to, link.keepParams)}
                                className={cx('header-text-link')}
                            >
                                {link.title}
                                {link.subHeader && <ChevronDown />}
                            </a>
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
