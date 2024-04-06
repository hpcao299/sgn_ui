import classNames from 'classnames/bind';
import React from 'react';
import styles from './Search.module.css';
import { Product } from '@/types';
import { formattedPrice } from '@/utils';
import Link from 'next/link';
import { Image } from '@/components';

const cx = classNames.bind(styles);

interface SearchItemProps {
    data: Product;
}

const SearchItem: React.FC<SearchItemProps> = ({ data }) => {
    return (
        <li>
            <Link href={`/products/${data.slug}`} style={{ textDecoration: 'none' }}>
                <div className={cx('result-item')}>
                    <Image src={data.image_url} alt={data.title} width={48} height={48} />
                    <div>
                        <div className={cx('result-item-title')}>{data.title}</div>
                        <span className={cx('result-item-price')}>
                            {formattedPrice(data.price)}
                        </span>
                    </div>
                </div>
            </Link>
        </li>
    );
};

export default SearchItem;
