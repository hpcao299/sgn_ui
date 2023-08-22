import classNames from 'classnames/bind';
import styles from './ProductItem.module.css';

const cx = classNames.bind(styles);

const ProductItemSkeleton = () => {
    return (
        <div className={cx('product-item', 'loading')}>
            <div className={cx('product-img')}></div>
            <div className={cx('product-title')}></div>
            <div className={cx('product-price')}></div>
        </div>
    );
};

export default ProductItemSkeleton;
