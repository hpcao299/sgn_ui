import classNames from 'classnames/bind';
import React from 'react';
import styles from './IconButton.module.css';

const cx = classNames.bind(styles);

interface IconButtonProps {
    size?: 'large' | 'medium' | 'small';
    color?: 'primary' | 'red';
    variant?: 'contained' | 'outlined';
    className?: string;
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;

    [keys: string]: unknown;
}

const IconButton: React.FC<IconButtonProps> = props => {
    const {
        Icon,
        className,
        size = 'medium',
        color = 'primary',
        variant = 'contained',
        ...attrs
    } = props;

    return (
        <button className={cx('button', size, color, variant, className)} {...attrs}>
            {Icon && <Icon />}
        </button>
    );
};

export default IconButton;
