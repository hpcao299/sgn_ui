'use client';

import cartApi from '@/apis/cartApi';
import { Button, QuantitySelector } from '@/components';
import config from '@/config';
import constants from '@/constants';
import { useAuthStore, useNotifyStore } from '@/stores';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styles from './ProductActions.module.css';

const cx = classNames.bind(styles);

interface ProductActionsProps {
    productId: number;
}

const ProductActions: React.FC<ProductActionsProps> = ({ productId }) => {
    const router = useRouter();
    const addNewNotification = useNotifyStore(state => state.addNewNotification);
    const [currentUser, getCurrentUser] = useAuthStore(state => [
        state.currentUser,
        state.getCurrentUser,
    ]);
    const [quantity, setQuantity] = useState<number>(1);

    useEffect(() => {
        router.prefetch(config.routes.cart);
    }, []);

    const handleChangeQuantity = (value: number) => {
        setQuantity(value);
    };

    const handleAddToCart = async () => {
        if (!currentUser) {
            addNewNotification(constants.notifications.NEED_SIGNED_IN);
            router.push(config.routes.login);
            return;
        }

        if (productId) {
            try {
                await cartApi.addItemToCart(productId, quantity);
                getCurrentUser();
                addNewNotification(constants.notifications.ADD_TO_CART_SUCCESS);
            } catch (error) {
                console.error(error);
                addNewNotification(constants.notifications.ADD_TO_CART_FAILED);
                throw error;
            }
        }
    };

    const handleOrderNow = async () => {
        try {
            await handleAddToCart();
            router.push(config.routes.cart);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <QuantitySelector
                value={quantity}
                handleChange={handleChangeQuantity}
                min={1}
                max={10}
            />
            <div className={cx('product-actions')}>
                <Button onClick={handleOrderNow}>đặt ngay</Button>
                <Button variant="outlined" onClick={handleAddToCart}>
                    thêm vào giỏ hàng
                </Button>
            </div>
        </>
    );
};

export default ProductActions;
