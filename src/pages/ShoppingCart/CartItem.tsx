import { ReactComponent as GarbageIcon } from '@/assets/icons/garbage.svg';
import { QuantitySelector } from '@/components/elements';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ShoppingCart.module.css';

const cx = classNames.bind(styles);

const CartItem: React.FC = () => {
    return (
        <div className={cx('grid')}>
            <div className={cx('grid-item', 'cart-item-details')}>
                <LazyLoadImage
                    src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_604odh2k.jpg"
                    alt="title"
                    effect="blur"
                />
                <h1>Giấy Photocopy A4 80GSM</h1>
            </div>
            <div className={cx('grid-item', 'cart-item-price')}>25,000VNĐ</div>
            <div className={cx('grid-item')}>
                <QuantitySelector />
            </div>
            <div className={cx('grid-item', 'cart-item-price')}>25,000VNĐ</div>
            <div className={cx('grid-item', 'cart-garbage-icon', 'small-grid-item')}>
                <button className={cx('delete-btn')}>
                    <GarbageIcon />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
