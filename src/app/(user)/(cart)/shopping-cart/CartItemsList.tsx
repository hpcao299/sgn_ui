'use client';

import config from '@/config';
import { CartItem as CartItemType } from '@/types';
import classNames from 'classnames/bind';
import Link from 'next/link';
import React from 'react';
import MediaQuery from 'react-responsive';
import CartItem from './CartItem';
import MobileCartItem from './MobileCartItem';
import styles from './ShoppingCart.module.css';

const cx = classNames.bind(styles);

interface CartItemsListProps {
    data: CartItemType[];
    isLoading: boolean;
}

const CartItemsList: React.FC<CartItemsListProps> = ({ data, isLoading }) => {
    return (
        <>
            <MediaQuery maxWidth={739}>
                {data?.length === 0 ? (
                    <div className={cx('empty-text')}>
                        <p>Giỏ hàng trống</p>
                        <Link href={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                    </div>
                ) : (
                    data?.map((item: CartItemType) => <MobileCartItem key={item.id} data={item} />)
                )}
            </MediaQuery>

            <MediaQuery minWidth={740}>
                <div className={cx('grid-wrapper')}>
                    <div className={cx('grid', 'grid-header')}>
                        <div className={cx('grid-item')}>sản phẩm</div>
                        <div className={cx('grid-item')}>giá</div>
                        <div className={cx('grid-item')}>số lượng</div>
                        <div className={cx('grid-item')}>tạm tính</div>
                        <div className={cx('grid-item', 'small-grid-item')}>xoá</div>
                    </div>
                    {data?.length === 0 && !isLoading ? (
                        <div className={cx('empty-text')}>
                            <p>Giỏ hàng trống</p>
                            <Link href={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                        </div>
                    ) : (
                        data?.map((item: CartItemType) => <CartItem key={item.id} data={item} />)
                    )}
                </div>
            </MediaQuery>
        </>
    );
};

export default CartItemsList;
