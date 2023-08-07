import config from '@/config';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import styles from './SubHeader.module.css';

const cx = classNames.bind(styles);

interface SubHeaderLinksProps {
    data: { title: string; slug: string }[];
}

const SubHeaderLinks: React.FC<SubHeaderLinksProps> = ({ data }) => {
    const handleToHref = (slug: string) => {
        return `${config.routes.products}?slug=${slug}`;
    };

    return (
        <div className={cx('header-sub-links')}>
            {data.map((link: { title: string; slug: string }, index: number) => (
                <Link style={{ cursor: 'pointer' }} key={index} href={handleToHref(link.slug)}>
                    {link.title}
                </Link>
            ))}
        </div>
    );
};

export default SubHeaderLinks;
