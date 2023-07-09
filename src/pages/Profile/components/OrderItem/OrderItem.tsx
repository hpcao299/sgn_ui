import loadingImg from '@/assets/images/loading-img.png';
import { Order } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './OrderItem.module.css';

const cx = classNames.bind(styles);

interface OrderItemProps {
    data: Order;
}

const OrderItem: React.FC<OrderItemProps> = ({ data }) => {
    const total = data.items.reduce((acc, item) => acc + item.total, 0) || 0;

    return (
        <div className={cx('order')}>
            <div className={cx('order-info')}>
                <p className={cx('order-id')}>
                    <span>Mã đơn:</span> <span>#{data.order_id}</span>
                </p>
                <p className={cx('order-total')}>
                    <span>Tổng cộng:</span> <span>{total.toLocaleString()}VNĐ</span>
                </p>
                <p>
                    <span>Đặt vào:</span> <span>...</span>
                </p>
            </div>
            <div className={cx('order-products')}>
                {data.items.map(item => (
                    <div key={item.id} className={cx('item')}>
                        <LazyLoadImage
                            src={item.image_url}
                            alt={item.title}
                            className={cx('item-img')}
                            effect="blur"
                            height="100%"
                            placeholderSrc={loadingImg}
                            style={{ backgroundColor: '#dadada' }}
                        />
                        <div className={cx('item-info')}>
                            <h2 className={cx('item-title')}>{item.title}</h2>
                            <p>
                                Số lượng: <span>{item.quantity}</span>
                            </p>
                            <p>
                                Tổng tiền: <span>{item.total.toLocaleString()}VNĐ</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderItem;
