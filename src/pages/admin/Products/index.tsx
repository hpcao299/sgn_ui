import classNames from 'classnames/bind';
import styles from './Products.module.css';
import React from 'react';
import ProductItem from '../components/ProductItem';
import { Button } from '@/components/elements';
import { Link } from 'react-router-dom';
import config from '@/config';

const cx = classNames.bind(styles);

const ProductsPage: React.FC = () => {
    return (
        <div>
            <div className={cx('search-wrapper')}>
                <input
                    type="text"
                    name="search"
                    className={cx('search')}
                    placeholder="Tìm sản phẩm..."
                />
                <Link to={config.routes.adminAddProduct}>
                    <Button className={cx('add-btn')}>Thêm sản phẩm</Button>
                </Link>
            </div>
            <h5 className="section-heading">Sản phẩm hiện có trên trang web</h5>
            <div className={cx('products-list')}>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
                <div className={cx('product-item')}>
                    <ProductItem />
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;
