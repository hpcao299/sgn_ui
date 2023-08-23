import { CartItem } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import Link from 'next/link';
import styles from './PaymentItem.module.css';
import { Image } from '@/components';

const cx = classNames.bind(styles);

interface PaymentItemProps {
    data: CartItem;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ data }) => {
    return (
        <div className={cx('item')}>
            <div className={cx('item-img')}>
                <Link href={`/products/${data.slug}`}>
                    <Image
                        src={data.image_url}
                        alt={data.title}
                        className={cx('product-img')}
                        style={{ backgroundColor: '#f0f0f0' }}
                        width={143}
                        height={143}
                        loading="lazy"
                    />
                </Link>
            </div>
            <div className={cx('item-details')}>
                <div className={cx('item-info')}>
                    <div>
                        <Link href={`/products/${data.slug}`}>
                            <h2 className={cx('item-title')}>{data.title}</h2>
                        </Link>
                        <p className={cx('item-quantity')}>Số lượng: {data.quantity}</p>
                    </div>
                    <p className={cx('item-total')}>
                        Tổng tiền: <span>{formattedPrice(data.total)}</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PaymentItem;
