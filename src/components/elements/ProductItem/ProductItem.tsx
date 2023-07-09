import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductItem.module.css';
import { Button, IconButton } from '@/components/elements';
import { ReactComponent as AddedBag } from '@/assets/icons/addedBag.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product } from '@/types';
import { formattedNumber } from '@/utils';
import { Link, useNavigate } from 'react-router-dom';
import loadingImg from '@/assets/images/loading-img.png';
import { useAuthContext } from '@/contexts/AuthContext';
import cartApi from '@/api/cartApi';
import config from '@/config';

const cx = classNames.bind(styles);

interface ProductItemProps {
    data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    const { currentUser } = useAuthContext();
    const navigate = useNavigate();

    const handleAddToCart = async () => {
        if (!currentUser) {
            // notify
            navigate(config.routes.login);
            return;
        }

        try {
            await cartApi.addItemToCart(data.id, 1);
            // notify
        } catch (error) {
            console.error(error);
            // notify
        }
    };

    return (
        <div className={cx('product-item')}>
            <Link to={`/products/${data.slug}`}>
                <LazyLoadImage
                    src={data.image_url}
                    alt={data.title}
                    className={cx('product-img')}
                    effect="blur"
                    height="100%"
                    placeholderSrc={loadingImg}
                    style={{ backgroundColor: '#dadada' }}
                />
            </Link>
            <Link to={`/products/${data.slug}`}>
                <h2 className={cx('product-title')}>{data.title}</h2>
            </Link>
            <p className={cx('product-price')}>{formattedNumber(data.price)} VNĐ</p>
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
