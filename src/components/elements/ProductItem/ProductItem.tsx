import cartApi from '@/api/cartApi';
import { ReactComponent as AddedBag } from '@/assets/icons/addedBag.svg';
import { Button, IconButton } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useAuthContext } from '@/contexts/AuthContext';
import { useNotifyContext } from '@/contexts/NotifyContext';
import { Product } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useNavigate } from 'react-router-dom';
import styles from './ProductItem.module.css';

const cx = classNames.bind(styles);

interface ProductItemProps {
    data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    const { addNewNotification } = useNotifyContext();
    const { currentUser, getCurrentUser } = useAuthContext();
    const navigate = useNavigate();

    const handleAddToCart = async () => {
        if (!currentUser) {
            addNewNotification(constants.notifications.NEED_SIGNED_IN);
            navigate(config.routes.login);
            return;
        }

        try {
            await cartApi.addItemToCart(data.id, 1);
            getCurrentUser();
            addNewNotification(constants.notifications.ADD_TO_CART_SUCCESS);
        } catch (error) {
            console.error(error);
            addNewNotification(constants.notifications.ADD_TO_CART_FAILED);
        }
    };

    return (
        <div className={cx('product-item')}>
            <Link to={`/products/${data.slug}`}>
                <LazyLoadImage
                    src={data.image_url}
                    alt={data.title}
                    className={cx('product-img')}
                    height="100%"
                    style={{ backgroundColor: '#dadada' }}
                />
            </Link>
            <Link to={`/products/${data.slug}`}>
                <h2 className={cx('product-title')}>{data.title}</h2>
            </Link>
            <p className={cx('product-price')}>{formattedPrice(data.price)}</p>
            <div className={cx('product-actions')}>
                <Link to={`/products/${data.slug}`}>
                    <Button size="small" color="primary">
                        Đặt ngay
                    </Button>
                </Link>
                <IconButton
                    size="small"
                    variant="outlined"
                    color="primary"
                    Icon={AddedBag}
                    className={cx('add-to-cart-btn')}
                    onClick={handleAddToCart}
                />
            </div>
        </div>
    );
};

export default ProductItem;
