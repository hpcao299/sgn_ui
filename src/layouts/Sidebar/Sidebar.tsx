// import categoriesApi from '@/api/categoriesApi';
import config from '@/config';
import { Category } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Sidebar.module.css';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

const cx = classNames.bind(styles);

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const searchParams = useSearchParams();
    // const { data } = categoriesApi.useCategories();

    // const handleToHref = (slug: string): string => {
    //     const newSearchParams = new URLSearchParams(searchParams);
    //     newSearchParams.set('category', slug);

    //     return `${config.routes.products}?${newSearchParams.toString()}`;
    // };

    return (
        <div className={cx('sidebar', className)}>
            <ul className={cx('list')}>
                {/* {data?.data.map((category: Category) => (
                    <li key={category.id} className={cx('list-item')}>
                        <Link style={{ cursor: 'pointer' }} to={handleToHref(category.slug)}>
                            {category.title}
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div>
    );
};

export default Sidebar;
