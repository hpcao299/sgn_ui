'use client';

import productsApi from '@/apis/productsApi';
import SearchIcon from '@/assets/icons/search.svg';
import { useDebounce } from '@/hooks';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from './Search.module.css';
import SearchItem from './SearchItem';
import { usePathname } from 'next/navigation';
import config from '@/config';

const cx = classNames.bind(styles);

const filterOptions = [
    { id: 10, title: 'Tất cả', slug: 'Tất-cả' },
    {
        id: 1,
        title: 'Thùng Carton - Hộp Carton',
        slug: 'Thùng-Carton-Hộp-Carton',
    },
    {
        id: 2,
        title: 'Bong Bóng Khí - Xốp Hơi',
        slug: 'Bong-Bóng-Khí-Xốp-Hơi',
    },
    {
        id: 3,
        title: 'Băng Keo - PE',
        slug: 'Băng-Keo-PE',
    },
    {
        id: 4,
        title: 'Túi Giấy KRAFT',
        slug: 'Túi-Giấy-KRAFT',
    },
    {
        id: 5,
        title: 'Túi Niêm Phong',
        slug: 'Túi-Niêm-Phong',
    },
    {
        id: 6,
        title: 'Giấy Photocopy - Tập Học Sinh',
        slug: 'Giấy-Photocopy-Tập-Học-Sinh',
    },
    {
        id: 7,
        title: 'Giấy Gói Hàng',
        slug: 'Giấy-Gói-Hàng',
    },
];

const Search: React.FC = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const pathname = usePathname();
    const [query, setQuery] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<Product[]>([]);
    const [visible, setVisible] = useState<boolean>(false);
    const debouncedQuery = useDebounce(query, 400);

    const handleChangeQuery: React.ChangeEventHandler<HTMLInputElement> = e => {
        setQuery(e.target.value);

        setVisible(e.target.value ? true : false);
    };

    const handleFocusSearch = () => {
        if (query) setVisible(true);
    };

    useEffect(() => {
        const searchPosts = async () => {
            setIsLoading(true);
            try {
                const data = await productsApi.searchProducts(query.trim());

                setData(data.data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        };

        if (query.length >= 1) {
            searchPosts();
        }
    }, [debouncedQuery]);

    useEffect(() => {
        const handleClickOutside = ({ target }: MouseEvent) => {
            if (formRef.current && !formRef.current.contains(target as Node)) {
                setVisible(false);
            }
        };

        if (visible) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [visible]);

    return (
        <div className={cx('wrapper', { 'hide-search': pathname.includes(config.routes.search) })}>
            <div className={cx('select-wrapper')}>
                <select name="filter" id="filter" defaultValue="Tất-cả" className={cx('select')}>
                    {filterOptions.map(option => (
                        <option key={option.id} value={option.slug}>
                            {option.title}
                        </option>
                    ))}
                </select>
            </div>
            <form className={cx('search')} ref={formRef}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Từ khoá"
                    autoComplete="off"
                    value={query}
                    onChange={handleChangeQuery}
                    onFocus={handleFocusSearch}
                />
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
                <div className={cx('search-results', { show: visible, hidden: !visible })}>
                    <header className={cx('result-header')}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <svg
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fas"
                                data-icon="magnifying-glass"
                                className="svg-inline--fa fa-magnifying-glass Search_icon__j+Y7z"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                width="14"
                                height="14"
                                style={{ marginRight: '8px' }}
                            >
                                <path
                                    fill="currentColor"
                                    d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"
                                ></path>
                            </svg>
                            <span>
                                {isLoading
                                    ? 'Tìm'
                                    : data.length === 0
                                    ? 'Không tìm thấy kết quả cho'
                                    : 'Kết quả cho'}{' '}
                                '{query}'
                            </span>
                        </div>
                        {!isLoading && data.length !== 0 && (
                            <Link href={`/search?q=${query}`}>Xem thêm</Link>
                        )}
                    </header>
                    {!isLoading && data.length !== 0 && (
                        <ul className={cx('result-list')}>
                            {data.map(item => (
                                <SearchItem key={item.id} data={item} />
                            ))}
                        </ul>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Search;
