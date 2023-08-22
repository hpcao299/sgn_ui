import { Image } from '@/components';
import { Order } from '@/types';
import { formattedDate, formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
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
                    <span>Tổng cộng:</span> <span>{formattedPrice(total)}</span>
                </p>
                <p>
                    <span>Đặt vào lúc:</span> <span>{formattedDate(data.orderred_at)}</span>
                </p>
            </div>
            <div className={cx('order-products')}>
                {data.items.map(item => (
                    <div key={item.id} className={cx('item')}>
                        <Image
                            src={item.image_url}
                            alt={item.title}
                            className={cx('item-img')}
                            loading="lazy"
                            style={{ backgroundColor: '#f0f0f0' }}
                        />
                        <div className={cx('item-info')}>
                            <h3 className={cx('item-title')}>{item.title}</h3>
                            <p>
                                Số lượng: <span>{item.quantity}</span>
                            </p>
                            <p>
                                Tổng tiền: <span>{formattedPrice(item.total)}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OrderItem;
