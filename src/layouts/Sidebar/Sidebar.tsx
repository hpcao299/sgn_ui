import { getCategories } from '@/libs/categories';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = async ({ className }) => {
    const data = await getCategories();

    const handleToHref = (slug: string): string => {
        return `/${slug}`;
    };

    return (
        <div className={cx('sidebar', className)}>
            <ul className={cx('list')}>
                {data?.data.map(category => (
                    <li key={category.id} className={cx('list-item')}>
                        <Link style={{ cursor: 'pointer' }} href={handleToHref(category.slug)}>
                            {category.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
