import classNames from 'classnames/bind';
import React from 'react';
import styles from './ProductItem.module.css';
import { Button, IconButton } from '@/components/elements';
import { ReactComponent as AddedBag } from '@/assets/icons/addedBag.svg';

const cx = classNames.bind(styles);

// interface ProductItemProps {}

const ProductItem: React.FC = () => {
    return (
        <div className={cx('product-item')}>
            <img
                src="http://thungcartonsgn.vn/files/sanpham/10/1/jpg/1-hop-carton-15x12x10-cm.jpg"
                alt=""
                className={cx('product-img')}
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
