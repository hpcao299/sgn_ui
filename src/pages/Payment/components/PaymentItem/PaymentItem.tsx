import loadingImg from '@/assets/images/loading-img.png';
import { CartItem } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styles from './PaymentItem.module.css';

const cx = classNames.bind(styles);

interface PaymentItemProps {
    data: CartItem;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ data }) => {
    return (
        <div className={cx('item')}>
            <div className={cx('item-img')}>
                <Link to={`/products/${data.slug}`}>
                    <LazyLoadImage
                        src={data.image_url}
                        alt={data.title}
                        effect="blur"
                        height="100%"
                        placeholderSrc={loadingImg}
                        style={{ backgroundColor: '#dadada' }}
                    />
                </Link>
            </div>
            <div className={cx('item-details')}>
                <div className={cx('item-info')}>
                    <div>
                        <Link to={`/products/${data.slug}`}>
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
