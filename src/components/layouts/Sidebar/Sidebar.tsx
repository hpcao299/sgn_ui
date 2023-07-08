import categoriesApi from '@/api/categoriesApi';
import config from '@/config';
import { Category } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './Sidebar.module.css';

const cx = classNames.bind(styles);

interface SidebarProps {
    className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const { data } = categoriesApi.useCategories();

    const handleNavigateWithParams = (slug: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('category', slug);

        navigate({ search: `?${newSearchParams.toString()}`, pathname: config.routes.products });
    };

    return (
        <div className={cx('sidebar', className)}>
            <ul className={cx('list')}>
                {data?.data.map((category: Category) => (
                    <li key={category.id} className={cx('list-item')}>
                        <a
                            style={{ cursor: 'pointer' }}
                            onClick={() => handleNavigateWithParams(category.slug)}
                        >
                            {category.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
