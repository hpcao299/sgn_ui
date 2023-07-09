import { Button } from '@/components/elements';
import config from '@/config';
import { CartItem } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CartActions.module.css';

const cx = classNames.bind(styles);

interface CartActionsProps {
    data: CartItem[];
}

const CartActions: React.FC<CartActionsProps> = ({ data }) => {
    const total = data.reduce((acc, item) => acc + item.total, 0);

    return (
        <div className={cx('cart-actions')}>
            <div>
                <h6>Cộng giỏ hàng</h6>
                <div className={cx('cart-summary')}>
                    <div className={cx('summary-item')}>Tổng Tiền Hàng</div>
                    <div className={cx('summary-item')}>{total.toLocaleString()}VNĐ</div>
                    <div className={cx('summary-item')}>Phí Vận Chuyển</div>
                    <div className={cx('summary-item')}>Free</div>
                    <div className={cx('summary-item')}>Tổng Tiền Thanh Toán</div>
                    <div className={cx('summary-item', 'cart-item-price')}>
                        {total.toLocaleString()}VNĐ
                    </div>
                </div>
                <Link to={config.routes.payment}>
                    <Button color="red">Tiến Hành Thanh Toán</Button>
                </Link>
            </div>
        </div>
    );
};

export default CartActions;
