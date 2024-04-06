'use client';

import productsApi from '@/apis/productsApi';
import { Image } from '@/components';
import { useDebounce } from '@/hooks';
import { SearchProduct } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ChangeEventHandler, useEffect, useState } from 'react';
import styles from './SearchPage.module.css';

const cx = classNames.bind(styles);

interface Props {
    searchParams: { q?: string };
}

const SearchPage = ({ searchParams }: Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const [query, setQuery] = useState<string>(searchParams.q || '');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<SearchProduct[]>([]);
    const debouncedQuery = useDebounce(query, 400);

    const handleChangeSearch: ChangeEventHandler<HTMLInputElement> = e => {
        setQuery(e.target.value);
        router.push(`${pathname}?q=${e.target.value}`);

        if (!e.target.value) setData([]);
    };

    useEffect(() => {
        const searchPosts = async () => {
            setIsLoading(true);
            try {
                const data = await productsApi.searchProducts(query.trim(), true);

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

    return (
        <div className={cx('container', 'content')}>
            <h1 style={{ position: 'absolute', top: '-100vh' }}>
                CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN
            </h1>
            <div className={cx('main')}>
                <input
                    className={cx('search-input')}
                    placeholder="Tìm kiếm..."
                    name="search"
                    autoComplete="off"
                    type="text"
                    value={query}
                    onChange={handleChangeSearch}
                />
                <div className={cx('results')}>
                    <span className={cx('message')}>
                        {isLoading
                            ? 'Đang tìm kiếm...'
                            : data.length === 0
                            ? 'Chưa có kết quả nào phù hợp.'
                            : ''}
                    </span>
                    <ul className={cx('result-list')}>
                        {!isLoading &&
                            data.length > 0 &&
                            data.map(item => (
                                <li key={item.id} className={cx('result-item')}>
                                    <Link href={`/products/${item.slug}`}>
                                        <Image
                                            src={item.image_url}
                                            alt={item.title}
                                            width={156}
                                            height={156}
                                        />
                                    </Link>
                                    <div className={cx('result-item-details')}>
                                        <Link href={`/products/${item.slug}`}>
                                            <h2 className={cx('result-item-title')}>
                                                {item.title}
                                            </h2>
                                        </Link>
                                        <div className={cx('result-item-desc')}>
                                            {item.short_desc}
                                        </div>
                                        <div className={cx('result-item-price')}>
                                            {formattedPrice(item.price)}
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SearchPage;
