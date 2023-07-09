import loadingImg from '@/assets/images/loading-img.png';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './PaymentItem.module.css';
import { CartItem } from '@/types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

interface PaymentItemProps {
    data: CartItem;
}

const PaymentItem: React.FC<PaymentItemProps> = ({ data }) => {
    return (
        <div className={cx('item')}>
            <Link to={`/products/${data.slug}`}>
                <LazyLoadImage
                    src={data.image_url}
                    alt={data.title}
                    className={cx('item-img')}
                    effect="blur"
                    height="100%"
                    placeholderSrc={loadingImg}
                    style={{ backgroundColor: '#dadada' }}
                />
            </Link>
            <div className={cx('item-details')}>
                <div className={cx('item-info')}>
                    <div>
                        <Link to={`/products/${data.slug}`}>
                            <h2 className={cx('item-title')}>{data.title}</h2>
                        </Link>
                        <p className={cx('item-quantity')}>Số lượng: {data.quantity}</p>
                    </div>
                    <p className={cx('item-total')}>Tổng tiền:</p>
                </div>
                <div className={cx('item-total')}>{data.total.toLocaleString()}VNĐ</div>
            </div>
        </div>
    );
};

export default PaymentItem;
