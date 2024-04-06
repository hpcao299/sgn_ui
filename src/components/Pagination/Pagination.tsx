'use client';

import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useCallback } from 'react';
import styles from './Pagination.module.css';

interface PaginationProps {
    total_pages: number;
    current_page: number;
}

const cx = classNames.bind(styles);

const Pagination: React.FC<PaginationProps> = ({ total_pages, current_page }) => {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const pages = Array.from({ length: total_pages }, (_, index) => index + 1);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString());
            params.set(name, value);

            return params.toString();
        },
        [searchParams],
    );

    return (
        <div className={cx('container')}>
            <ul className={cx('list')}>
                <li className={cx('item', { disabled: current_page === 1 })}>
                    <button
                        onClick={() => {
                            if (current_page === 1) return;
                            router.push(
                                `${pathname}?${createQueryString(
                                    'page',
                                    String(current_page - 1),
                                )}`,
                            );
                        }}
                    >
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="left"
                            width="12px"
                            height="12px"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path>
                        </svg>
                    </button>
                </li>
                {pages.map(page => (
                    <li key={page} className={cx('item', { active: page === current_page })}>
                        <Link
                            style={{ textDecoration: 'none' }}
                            href={pathname + '?' + createQueryString('page', `${page}`)}
                        >
                            <button>{page}</button>
                        </Link>
                    </li>
                ))}
                <li className={cx('item', { disabled: current_page === total_pages })}>
                    <button
                        onClick={() => {
                            if (current_page === total_pages) return;
                            router.push(
                                `${pathname}?${createQueryString(
                                    'page',
                                    String(current_page + 1),
                                )}`,
                            );
                        }}
                    >
                        <svg
                            viewBox="64 64 896 896"
                            focusable="false"
                            data-icon="right"
                            width="12px"
                            height="12px"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default Pagination;
