import React from 'react';
import classNames from 'classnames/bind';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from '@/assets/icons/search.svg';

const cx = classNames.bind(styles);

const filterOptions = ['Thùng', 'Băng keo'];

const Search: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('select-wrapper')}>
                <select name="filter" id="filter" defaultValue="Tất cả" className={cx('select')}>
                    <option value="Tất cả">Tất cả</option>
                    {filterOptions.map((value, index) => (
                        <option key={index} value={value}>
                            {value}
                        </option>
                    ))}
                </select>
            </div>
            <form className={cx('search')}>
                <input type="text" name="search" id="search" placeholder="Từ khoá" />
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </form>
        </div>
    );
};

export default Search;
