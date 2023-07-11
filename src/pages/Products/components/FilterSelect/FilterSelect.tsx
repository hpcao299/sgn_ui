import classNames from 'classnames/bind';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import styles from './FilterSelect.module.css';

const cx = classNames.bind(styles);

const filterOptions = [
    { title: 'Phổ biến', value: 'popular' },
    { title: 'Bán chạy', value: 'best-sellings' },
    { title: 'Hàng mới', value: 'new-arrivals' },
    { title: 'Giá thấp đến cao', value: 'price-low-to-high' },
    { title: 'Giá cao đến thấp', value: 'price-high-to-low' },
];

const FilterSelect: React.FC = () => {
    const [currentQueryParameters, setSearchParams] = useSearchParams();
    const [value, setValue] = useState(currentQueryParameters.get('filter') || 'popular');

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchParams(prevSearchParams => {
            const updatedSearchParams = new URLSearchParams(prevSearchParams);
            updatedSearchParams.set('filter', e.target.value);
            return updatedSearchParams.toString();
        });
        setValue(e.target.value);
    };

    useEffect(() => {
        if (!currentQueryParameters.get('filter')) {
            setValue('popular');
        }
    }, [currentQueryParameters]);

    return (
        <div className={cx('filter-products-wrapper')}>
            <select
                name="filter-products"
                id="filter-products"
                className={cx('filter-products')}
                onChange={handleSelectChange}
                value={value}
            >
                {filterOptions.map((option, i) => (
                    <option key={i} value={option.value}>
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default FilterSelect;
