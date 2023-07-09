import loadingImg from '@/assets/images/loading-img.png';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './PaymentItem.module.css';

const cx = classNames.bind(styles);

const PaymentItem: React.FC = () => {
    return (
        <div className={cx('item')}>
            <LazyLoadImage
                src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_60h89w01.jpg"
                alt=""
                className={cx('item-img')}
                effect="blur"
                height="100%"
                placeholderSrc={loadingImg}
                style={{ backgroundColor: '#dadada' }}
            />
            <div className={cx('item-details')}>
                <div className={cx('item-info')}>
                    <div>
                        <h2 className={cx('item-title')}>Giấy Photocopy A4 80GSM</h2>
                        <p className={cx('item-quantity')}>Số lượng: 2</p>
                    </div>
                    <p className={cx('item-total')}>Tổng tiền:</p>
                </div>
                <div className={cx('item-total')}>25,000VNĐ</div>
            </div>
        </div>
    );
};

export default PaymentItem;
