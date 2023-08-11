'use client';

import classNames from 'classnames/bind';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react';
import styles from './FilterSelect.module.css';

const cx = classNames.bind(styles);

const filterOptions = [
    { title: 'Bán chạy', value: 'best-sellings' },
    { title: 'Giá thấp đến cao', value: 'price-low-to-high' },
    { title: 'Giá cao đến thấp', value: 'price-high-to-low' },
];

const FilterSelect: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [value, setValue] = useState<string>(
        searchParams.get('filter') || filterOptions[0].value,
    );

    console.log('re-render');

    const onSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        // now you got a read/write object
        const current = new URLSearchParams(Array.from(searchParams.entries())); // -> has to use this form

        // update as necessary
        const value = event.target.value.trim();

        if (!value) {
            current.delete('filter');
        } else {
            current.set('filter', event.target.value);
        }

        // cast to string
        const search = current.toString();
        // or const query = `${'?'.repeat(search.length && 1)}${search}`;
        const query = search ? `?${search}` : '';

        setValue(value);
        router.push(`${pathname}${query}`);
    };

    useEffect(() => {
        setValue(searchParams.get('filter') || filterOptions[0].value);
    }, [pathname, searchParams.get('filter')]);

    return (
        <div className={cx('filter-products-wrapper')}>
            <select
                name="filter-products"
                id="filter-products"
                className={cx('filter-products')}
                onChange={onSelectChange}
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
