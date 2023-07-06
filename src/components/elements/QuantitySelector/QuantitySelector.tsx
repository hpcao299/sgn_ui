import classNames from 'classnames/bind';
import React, { useState } from 'react';
import styles from './QuantitySelector.module.css';

const cx = classNames.bind(styles);

interface QuantitySelectorProps {
    defaultValue?: number;

    min?: number;
    max?: number;
    handleChange?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = props => {
    const { min = 1, max = 10, defaultValue = 1, handleChange } = props;
    const [value, setValue] = useState<number>(defaultValue);

    const handleDecrement = () => {
        if (value !== min) {
            const newValue = value - 1;

            setValue(newValue);
            typeof handleChange === 'function' && handleChange(newValue);
        }
    };

    const handleIncrement = () => {
        if (value !== max) {
            const newValue = value + 1;

            setValue(newValue);
            typeof handleChange === 'function' && handleChange(newValue);
        }
    };

    return (
        <div className={cx('flex', 'wrapper')}>
            <button onClick={handleDecrement}>-</button>
            <input type="number" readOnly value={value} min={min} max={max} />
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default QuantitySelector;
