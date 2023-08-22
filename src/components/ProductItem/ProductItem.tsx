// import AddedBag from '@/assets/icons/addedBag.svg';
// import { Button, IconButton } from '@/components/elements';
// import config from '@/config';
// import constants from '@/constants';
// import { useAuthContext } from '@/contexts/AuthContext';
// import { useNotifyContext } from '@/contexts/NotifyContext';
import { Product } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductItem.module.css';
import Link from 'next/link';
import { Image } from '@/components';

const cx = classNames.bind(styles);

interface ProductItemProps {
    data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    // const { addNewNotification } = useNotifyContext();
    // const { currentUser, getCurrentUser } = useAuthContext();
    // const navigate = useNavigate();

    // const handleAddToCart = async () => {
    //     if (!currentUser) {
    //         addNewNotification(constants.notifications.NEED_SIGNED_IN);
    //         navigate(config.routes.login);
    //         return;
    //     }

    //     try {
    //         await cartApi.addItemToCart(data.id, 1);
    //         getCurrentUser();
    //         addNewNotification(constants.notifications.ADD_TO_CART_SUCCESS);
    //     } catch (error) {
    //         console.error(error);
    //         addNewNotification(constants.notifications.ADD_TO_CART_FAILED);
    //     }
    // };

    return (
        <div className={cx('product-item')}>
            <Link href={`/products/${data.slug}`}>
                <Image
                    src={data.image_url}
                    alt={data.title}
                    className={cx('product-img')}
                    style={{ backgroundColor: '#f0f0f0' }}
                    width={204}
                    height={204}
                    loading="lazy"
                    // onError={handleImageError}
                />
            </Link>
            <Link href={`/products/${data.slug}`}>
                <h3 className={cx('product-title')}>{data.title}</h3>
            </Link>
            <p className={cx('product-price')}>{formattedPrice(data.price)}</p>
            {/* <div className={cx('product-actions')}>
                <Link href={`/products/${data.slug}`}>
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
            </div> */}
        </div>
    );
};

export default ProductItem;
