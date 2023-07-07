import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductItem.module.css';
import { Button, IconButton } from '@/components/elements';
import { ReactComponent as AddedBag } from '@/assets/icons/addedBag.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cx = classNames.bind(styles);

// interface ProductItemProps {}

const ProductItem: React.FC = () => {
    return (
        <div className={cx('product-item')}>
            <LazyLoadImage
                src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_604odh2k.jpg"
                alt=""
                className={cx('product-img')}
                effect="blur"
            />
            <h2 className={cx('product-title')}>Giấy Photocopy A4 80GSM</h2>
            <p className={cx('product-price')}>25,000VNĐ</p>
            <div className={cx('product-actions')}>
                <Button size="small" color="primary">
                    Đặt ngay
                </Button>
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
