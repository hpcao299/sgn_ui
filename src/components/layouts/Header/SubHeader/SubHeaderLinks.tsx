import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './SubHeader.module.css';

const cx = classNames.bind(styles);

interface SubHeaderLinksProps {
    data: { title: string; slug: string }[];
}

const SubHeaderLinks: React.FC<SubHeaderLinksProps> = ({ data }) => {
    const [searchParams] = useSearchParams();

    const handleToHref = (slug: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('category', slug);

        return `${config.routes.products}?${newSearchParams.toString()}`;
    };

    return (
        <div className={cx('header-sub-links')}>
            {data.map((link: { title: string; slug: string }, index: number) => (
                <Link style={{ cursor: 'pointer' }} key={index} to={handleToHref(link.slug)}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default SubHeaderLinks;
