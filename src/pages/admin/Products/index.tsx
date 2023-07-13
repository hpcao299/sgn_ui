import { Button, Loader } from '@/components/elements';
import config from '@/config';
import { ProductStatistic } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import productApi from '../api/productApi';
import ProductItem from '../components/ProductItem';
import styles from './Products.module.css';

const cx = classNames.bind(styles);

const ProductsPage: React.FC = () => {
    const { data, isLoading } = productApi.useProductsList();
    const productsList: ProductStatistic[] = data?.data;

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
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <div className={cx('products-list')}>
                    {productsList.map(item => (
                        <div key={item.id} className={cx('product-item')}>
                            <ProductItem data={item} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProductsPage;
