import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import styles from './PageDetails.module.css';

const cx = classNames.bind(styles);

interface PageDetailsProps {
    paths?: { to: string; title: string }[];
    title: string;
}

const PageDetails: React.FC<PageDetailsProps> = ({ paths, title }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container', 'content')}>
                <div className={cx('page-title', { 'page-no-margin': !Boolean(paths) })}>
                    {title}
                </div>
                <div className={cx('links')}>
                    {paths &&
                        paths.map((path, index) => (
                            <div className={cx('link-wrapper')} key={index}>
                                <Link href={path.to}>{path.title}</Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PageDetails;
