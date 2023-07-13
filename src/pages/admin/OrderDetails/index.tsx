import React from 'react';
import styles from './OrderDetails.module.css';
import classNames from 'classnames/bind';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cx = classNames.bind(styles);

const OrderDetailsPage: React.FC = () => {
    return (
        <>
            <div style={{ marginBottom: '32px' }}>
                <h5 className="section-heading">Thông tin đơn hàng</h5>
                <p className={cx('order-info')}>
                    Tên người đặt: <span>Phuc cao</span>
                </p>
                <p className={cx('order-info')}>
                    Email: <span>caohoangphuc@gmail.com</span>
                </p>
                <p className={cx('order-info')}>
                    Số điện thoại: <span>0901457769</span>
                </p>
                <p className={cx('order-info')}>
                    Địa chỉ: <span>409 nguyen oanh</span>
                </p>
                <p className={cx('order-info')}>
                    Lời nhắn: <span>shippdi toi cho t</span>
                </p>
            </div>
            <div>
                <h5 className="section-heading">Mặt hàng trong đơn</h5>
                <div className={cx('items-list')}>
                    <div className={cx('order-item')}>
                        <LazyLoadImage
                            src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_830499nS.jpg"
                            alt="Title"
                            className={cx('item-img')}
                            height="100%"
                            style={{ backgroundColor: '#dadada' }}
                        />
                        <div className={cx('item-details')}>
                            <h4 className={cx('item-title')}>title</h4>
                            <p>
                                <span>Số lượng:</span> 1
                            </p>
                            <p className={cx('item-price')}>
                                <span>Tổng tiền:</span> 1,000,000 VNĐ
                            </p>
                        </div>
                    </div>
                    <div className={cx('order-item')}>
                        <LazyLoadImage
                            src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_830499nS.jpg"
                            alt="Title"
                            className={cx('item-img')}
                            height="100%"
                            style={{ backgroundColor: '#dadada' }}
                        />
                        <div className={cx('item-details')}>
                            <h4 className={cx('item-title')}>title</h4>
                            <p>
                                <span>Số lượng:</span> 1
                            </p>
                            <p className={cx('item-price')}>
                                <span>Tổng tiền:</span> 1,000,000 VNĐ
                            </p>
                        </div>
                    </div>
                </div>
                <div className={cx('order-total')}>
                    <p>Tổng cộng:</p>
                    <p>1,000,000 VNĐ</p>
                </div>
            </div>
        </>
    );
};

export default OrderDetailsPage;
