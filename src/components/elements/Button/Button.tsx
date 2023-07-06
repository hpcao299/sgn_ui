import classNames from 'classnames/bind';
import React from 'react';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

interface ButtonProps {
    size?: 'large' | 'medium' | 'small';
    color?: 'primary' | 'red';
    variant?: 'contained' | 'outlined';
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
        ...attrs
    } = props;
    return (
        <button className={cx('button', size, color, variant, className)} {...attrs}>
            {children}
        </button>
    );
};

export default Button;
