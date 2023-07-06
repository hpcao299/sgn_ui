import classNames from 'classnames/bind';
import React from 'react';
import styles from './Button.module.css';

const cx = classNames.bind(styles);

interface ButtonProps {
    size?: 'large' | 'medium' | 'small';
    color?: 'primary' | 'red';
    className?: string;
    children?: React.ReactNode;

    [keys: string]: unknown;
}

const Button: React.FC<ButtonProps> = props => {
    const { children, className, size = 'medium', color = 'primary', ...attrs } = props;
    return (
        <button className={cx('button', size, color, className)} {...attrs}>
            {children}
        </button>
    );
};

export default Button;
