import React from 'react';
import styles from './ProductItem.module.css';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cx = classNames.bind(styles);

const ProductItem: React.FC = () => {
    return (
        <div className={cx('product-item')}>
            <Link to="/">
                <LazyLoadImage
                    src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_830499nS.jpg"
                    alt="Title"
                    className={cx('product-img')}
                    height="100%"
                    style={{ backgroundColor: '#dadada' }}
                />
            </Link>
            <Link to={`/products/`}>
                <h2 className={cx('product-title')}>title</h2>
            </Link>
            <div className={cx('product-has-sold')}>Đã bán: 2</div>
        </div>
    );
};

export default ProductItem;
