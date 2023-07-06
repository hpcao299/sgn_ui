import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import CartItem from './CartItem';
import styles from './ShoppingCart.module.css';

const cx = classNames.bind(styles);

const paths = [
    {
        to: config.routes.home,
        title: 'Trang chủ',
    },
    {
        to: config.routes.cart,
        title: 'Giỏ hàng',
    },
];

const ShoppingCartPage: React.FC = () => {
    return (
        <>
            <PageDetails title="Giỏ hàng" paths={paths} />
            <div className={cx('content')}>
                <div className="container">
                    <div className={cx('grid-wrapper')}>
                        <div className={cx('grid', 'grid-header')}>
                            <div className={cx('grid-item')}>sản phẩm</div>
                            <div className={cx('grid-item')}>giá</div>
                            <div className={cx('grid-item')}>số lượng</div>
                            <div className={cx('grid-item')}>tạm tính</div>
                            <div className={cx('grid-item', 'small-grid-item')}>xoá</div>
                        </div>
                        <CartItem />
                        <CartItem />
                    </div>
                    <div className={cx('cart-actions')}>
                        <div>
                            <h6>Cộng giỏ hàng</h6>
                            <div className={cx('cart-summary')}>
                                <div className={cx('summary-item')}>Tổng Tiền Hàng</div>
                                <div className={cx('summary-item')}>50,000VNĐ</div>
                                <div className={cx('summary-item')}>Phí Vận Chuyển</div>
                                <div className={cx('summary-item')}>10,000VNĐ</div>
                                <div className={cx('summary-item')}>Tổng Tiền Thanh Toán</div>
                                <div className={cx('summary-item', 'cart-item-price')}>
                                    60,000VNĐ
                                </div>
                            </div>
                            <Button color="red">Tiến Hành Thanh Toán</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingCartPage;
