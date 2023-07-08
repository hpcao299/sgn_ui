import classNames from 'classnames/bind';
import React from 'react';
import styles from './Loader.module.css';

const cx = classNames.bind(styles);

interface LoaderProps {
    className?: string;
    [key: string]: unknown;
}

const Loader: React.FC<LoaderProps> = ({ className, ...props }) => {
    return <div className={cx('loader', className)} {...props}></div>;
};

export default Loader;
