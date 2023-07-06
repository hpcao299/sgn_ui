import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
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
                <h2>{title}</h2>
                <div>
                    {paths &&
                        paths.map((path, index) => (
                            <div className={cx('link-wrapper')} key={index}>
                                <Link to={path.to}>{path.title}</Link>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default PageDetails;
