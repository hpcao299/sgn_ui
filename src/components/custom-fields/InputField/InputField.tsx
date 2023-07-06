import classNames from 'classnames/bind';
import React from 'react';
import styles from './InputField.module.css';

const cx = classNames.bind(styles);

interface InputFieldProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    field?: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    form?: any;

    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    type?: string;
    [keys: string]: unknown;
}

const InputField: React.FC<InputFieldProps> = params => {
    const { Icon, ...props } = params;
    return (
        // 'error'
        <div className={cx('wrapper')}>
            {Icon && <Icon />}
            <input className={cx('input')} {...props} />
            {/* <p className={cx('error-text')}>Your account is missing.</p> */}
        </div>
    );
};

export default InputField;
