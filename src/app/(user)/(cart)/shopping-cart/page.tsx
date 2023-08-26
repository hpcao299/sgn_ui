'use client';

import cartApi from '@/apis/cartApi';
import { ErrorHandler, Loader } from '@/components';
import { CartItem as CartItemType, ErrorResponse } from '@/types';
import classNames from 'classnames/bind';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styles from './ShoppingCart.module.css';

const CartItemsList = dynamic(() => import('./CartItemsList'), { ssr: false });
const CartActions = dynamic(() => import('./CartActions'), { ssr: false });

const cx = classNames.bind(styles);

const ShoppingCartPage: NextPage = () => {
    const { data, isLoading, isValidating, error } = cartApi.getCartItems();
    const cartItems: CartItemType[] = data?.data;

    return (
        <div className={cx('content')}>
            {(isLoading || isValidating) && <Loader className={cx('loader')} />}

            <div
                className={cx(
                    'container',
                    'cart-container',
                    (isLoading || isValidating) && 'loading',
                )}
            >
                <CartItemsList isLoading={isLoading} data={cartItems} />
                {error && <ErrorHandler error={error as ErrorResponse} />}
                {cartItems?.length > 0 && <CartActions data={cartItems} />}
            </div>
        </div>
    );
};

export default ShoppingCartPage;
