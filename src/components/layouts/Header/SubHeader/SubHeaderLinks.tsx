import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './SubHeader.module.css';

const cx = classNames.bind(styles);

interface SubHeaderLinksProps {
    data: { title: string; slug: string }[];
}

const SubHeaderLinks: React.FC<SubHeaderLinksProps> = ({ data }) => {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const handleNavigateWithParams = (slug: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('category', slug);

        navigate({ search: `?${newSearchParams.toString()}`, pathname: config.routes.products });
    };

    return (
        <div className={cx('header-sub-links')}>
            {data.map((link: { title: string; slug: string }, index: number) => (
                <a
                    style={{ cursor: 'pointer' }}
                    key={index}
                    onClick={() => handleNavigateWithParams(link.slug)}
                >
                    {link.title}
                </a>
            ))}
        </div>
    );
};

export default SubHeaderLinks;
