import loadingImg from '@/assets/images/loading-img.png';
import { Loader } from '@/components/elements';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React, { useMemo } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import orderApi from '../api/orderApi';
import styles from './OrderDetails.module.css';

const cx = classNames.bind(styles);

interface Item {
    created_at: string;
    id: number;
    image_url: string;
    order_id: number;
    product_id: number;
    quantity: number;
    slug: string;
    title: string;
    total: number;
}

const OrderItems: React.FC = () => {
    const params = useParams();
    const { data, isLoading } = orderApi.useOrderItems(Number(params.id));
    const itemsList: Item[] = data?.data;
    const totalPrice = useMemo(
        () => (itemsList ? itemsList.reduce((acc, item) => acc + item.total, 0) : 0),
        [itemsList],
    );

    return (
        <div>
            <h5 className="section-heading">Mặt hàng trong đơn</h5>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <>
                    <div className={cx('items-list')}>
                        {itemsList.map(item => (
                            <div key={item.id} className={cx('order-item')}>
                                <LazyLoadImage
                                    src={item.image_url}
                                    alt={item.title}
                                    className={cx('item-img')}
                                    placeholderSrc={loadingImg}
                                    effect="blur"
                                    height="100%"
                                    style={{ backgroundColor: '#dadada' }}
                                />
                                <div className={cx('item-details')}>
                                    <h4 className={cx('item-title')}>{item.title}</h4>
                                    <p>
                                        <span>Số lượng:</span> {item.quantity}
                                    </p>
                                    <p className={cx('item-price')}>
                                        <span>Tổng tiền:</span> {formattedPrice(item.total)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={cx('order-total')}>
                        <p>Tổng cộng:</p>
                        <p>{formattedPrice(totalPrice)}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default OrderItems;
