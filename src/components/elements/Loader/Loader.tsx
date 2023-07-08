import classNames from 'classnames/bind';
import React from 'react';
import styles from './Loader.module.css';

const cx = classNames.bind(styles);

interface LoaderProps {
    size?: 'small' | 'medium' | 'large';
    className?: string;
    [key: string]: unknown;
}

const Loader: React.FC<LoaderProps> = ({ className, size = 'small', ...props }) => {
    return <div className={cx('loader', size, className)} {...props}></div>;
};

export default Loader;
