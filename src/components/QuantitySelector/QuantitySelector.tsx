'use client';

import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import styles from './QuantitySelector.module.css';

const cx = classNames.bind(styles);

interface QuantitySelectorProps {
    value?: number;

    min?: number;
    max?: number;
    handleChange?: (value: number) => void;
}

const QuantitySelector: React.FC<QuantitySelectorProps> = props => {
    const { min = 1, max, value: valueParam = 1, handleChange } = props;
    const [value, setValue] = useState<number>(valueParam);

    useEffect(() => {
        setValue(valueParam);
    }, [valueParam]);

    const handleDecrement = () => {
        if (value > min) {
            const newValue = value - 1;

            setValue(newValue);
            handleChange?.(newValue);
        }
    };

    const handleIncrement = () => {
        if (!max || value < max) {
            const newValue = value + 1;

            setValue(newValue);
            handleChange?.(newValue);
        }
    };

    return (
        <div className={cx('flex', 'wrapper')}>
            <button onClick={handleDecrement} aria-label="Giảm số lượng">
                -
            </button>
            <input type="number" readOnly value={value} min={min} max={max ? max : undefined} />
            <button onClick={handleIncrement} aria-label="Tăng số lượng">
                +
            </button>
        </div>
    );
};

export default QuantitySelector;
