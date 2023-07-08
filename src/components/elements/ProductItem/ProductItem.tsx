import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductItem.module.css';
import { Button, IconButton } from '@/components/elements';
import { ReactComponent as AddedBag } from '@/assets/icons/addedBag.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Product } from '@/types';
import { formattedNumber } from '@/utils';
import { Link } from 'react-router-dom';
import loadingImg from '@/assets/images/loading-img.png';

const cx = classNames.bind(styles);

interface ProductItemProps {
    data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
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
                />
            </div>
        </div>
    );
};

export default ProductItem;
