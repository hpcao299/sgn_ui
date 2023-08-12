import classNames from 'classnames/bind';
import React from 'react';
import styles from './InputField.module.css';

const cx = classNames.bind(styles);

interface InputFieldProps {
    Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
    type?: string;
    error?: string;
    [keys: string]: unknown;
}

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((params, ref) => {
    const { Icon, error, ...props } = params;

    return (
        // 'error'
        <div className={cx('wrapper', error && 'error')} ref={null}>
            {Icon && <Icon />}
            <input className={cx('input', !Icon && 'no-icon')} ref={ref} {...props} />
            {error && <p className={cx('error-text')}>{error}</p>}
        </div>
    );
});

export default InputField;
