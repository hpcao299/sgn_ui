import cartApi from '@/api/cartApi';
import { Loader, PageDetails } from '@/components/elements';
import config from '@/config';
import { CartItem as CartItemType } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ShoppingCart.module.css';
import CartActions from './components/CartActions';
import CartItem from './components/CartItem';

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
    const { data, isLoading, isValidating } = cartApi.getCartItems();
    const cartItems: CartItemType[] = data?.data;

    return (
        <>
            <PageDetails title="Giỏ hàng" paths={paths} />
            <div className={cx('content')}>
                {(isLoading || isValidating) && <Loader className={cx('loader')} />}
                <div
                    className={cx(
                        'container',
                        'cart-container',
                        (isLoading || isValidating) && 'loading',
                    )}
                >
                    <div className={cx('grid-wrapper')}>
                        <div className={cx('grid', 'grid-header')}>
                            <div className={cx('grid-item')}>sản phẩm</div>
                            <div className={cx('grid-item')}>giá</div>
                            <div className={cx('grid-item')}>số lượng</div>
                            <div className={cx('grid-item')}>tạm tính</div>
                            <div className={cx('grid-item', 'small-grid-item')}>xoá</div>
                        </div>
                        {cartItems?.length === 0 ? (
                            <div className={cx('empty-text')}>
                                <p>Giỏ hàng trống</p>
                                <Link to={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                            </div>
                        ) : (
                            cartItems?.map((item: CartItemType) => (
                                <CartItem key={item.id} data={item} />
                            ))
                        )}
                    </div>
                    {cartItems?.length > 0 && <CartActions data={cartItems} />}
                </div>
            </div>
        </>
    );
};

export default ShoppingCartPage;
