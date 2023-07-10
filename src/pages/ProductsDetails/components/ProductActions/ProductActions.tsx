import cartApi from '@/api/cartApi';
import { Button, QuantitySelector } from '@/components/elements';
import config from '@/config';
import { useAuthContext } from '@/contexts/AuthContext';
import classNames from 'classnames/bind';
import React, { memo, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from './ProductActions.module.css';
import { useNotifyContext } from '@/contexts/NotifyContext';
import constants from '@/constants';

const cx = classNames.bind(styles);

interface ProductActionsProps {
    productId?: number;
}

const ProductActions: React.FC<ProductActionsProps> = ({ productId }) => {
    const navigate = useNavigate();
    const { addNewNotification } = useNotifyContext();
    const { currentUser, getCurrentUser } = useAuthContext();
    const params = useParams();
    const [quantity, setQuantity] = useState<number>(1);

    const handleChangeQuantity = (value: number) => {
        setQuantity(value);
    };

    const handleAddToCart = async () => {
        if (!currentUser) {
            addNewNotification(constants.notifications.NEED_SIGNED_IN);
            navigate(config.routes.login);
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
            }
        }
    };

    const handleOrderNow = async () => {
        try {
            await handleAddToCart();
            navigate(config.routes.cart);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setQuantity(1);
    }, [params?.slug]);

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

export default memo(ProductActions);
