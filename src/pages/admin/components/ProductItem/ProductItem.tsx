import { ProductStatistic } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';
import loadingImg from '@/assets/images/loading-img.png';

const cx = classNames.bind(styles);

interface ProductItemProps {
    data: ProductStatistic;
}

const ProductItem: React.FC<ProductItemProps> = ({ data }) => {
    return (
        <div className={cx('product-item')}>
            <Link to={`/admin/products/${data.id}`}>
                <LazyLoadImage
                    src={data.image_url}
                    alt={data.title}
                    placeholderSrc={loadingImg}
                    effect="blur"
                    className={cx('product-img')}
                    height="100%"
                    style={{ backgroundColor: '#dadada' }}
                />
            </Link>
            <Link to={`/admin/products/${data.id}`}>
                <h2 className={cx('product-title')}>{data.title}</h2>
            </Link>
            <div className={cx('product-has-sold')}>Đã bán: {data.has_sold}</div>
        </div>
    );
};

export default ProductItem;
