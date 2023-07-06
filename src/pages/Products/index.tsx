import { PageDetails, ProductItem } from '@/components/elements';
import Sidebar from '@/components/layouts/Sidebar';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Products.module.css';
import Pagination from './components/Pagination';

const cx = classNames.bind(styles);

const paths = [
    {
        title: 'Trang chủ',
        to: config.routes.home,
    },
    { title: 'Sản phẩm', to: config.routes.products },
];

const filterOptions = ['Phổ biến', 'Bán chạy', 'Hàng mới', 'Giá thấp đến cao', 'Giá cao đến thấp'];

const ProductsPage: React.FC = () => {
    return (
        <>
            <PageDetails title="Sản phẩm" paths={paths} />
            <div className={cx('content')}>
                <div className="container flex">
                    <div>
                        <Sidebar />
                    </div>
                    <div className={cx('products-container')}>
                        <div className={cx('filter-products-wrapper')}>
                            <select
                                name="filter-products"
                                id="filter-products"
                                defaultValue="Phổ biến"
                                className={cx('filter-products')}
                            >
                                {filterOptions.map((option, i) => (
                                    <option key={i} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className={cx('products-list')}>
                            <div className={cx('products-item')}>
                                <ProductItem />
                            </div>
                            <div className={cx('products-item')}>
                                <ProductItem />
                            </div>
                            <div className={cx('products-item')}>
                                <ProductItem />
                            </div>
                            <div className={cx('products-item')}>
                                <ProductItem />
                            </div>
                            <div className={cx('products-item')}>
                                <ProductItem />
                            </div>
                            <div className={cx('products-item')}>
                                <ProductItem />
                            </div>
                        </div>
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
