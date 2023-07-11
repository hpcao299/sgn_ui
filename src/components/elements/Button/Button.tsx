import classNames from 'classnames/bind';
import React from 'react';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

interface ButtonProps {
    size?: 'large' | 'medium' | 'small';
    color?: 'primary' | 'red';
    variant?: 'contained' | 'outlined';
    loading?: boolean;
    className?: string;
    children?: React.ReactNode;

    [keys: string]: unknown;
}

const Button: React.FC<ButtonProps> = props => {
    const {
        children,
        className,
        size = 'medium',
        color = 'primary',
        variant = 'contained',
        loading = false,
        ...attrs
    } = props;
    return (
        <button
            className={cx('button', size, color, variant, loading && 'loading', className)}
            {...attrs}
        >
            {loading ? 'Đang tải...' : children}
        </button>
    );
};

export default Button;
