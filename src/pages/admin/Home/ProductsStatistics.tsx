import { Button, Loader } from '@/components/elements';
import config from '@/config';
import { ProductStatistic } from '@/types';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import statisticApi from '../api/statisticsApi';
import ProductItem from '../components/ProductItem';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

const ProductsStatistics: React.FC = () => {
    const { data, isLoading } = statisticApi.useProductsStatistics();
    const productsList: ProductStatistic[] = data?.data;

    return (
        <div className={cx('products-wrapper')}>
            <h5 className={cx('section-heading')}>Sản phẩm bán chạy của web</h5>
            {isLoading ? (
                <div className="flex-center">
                    <Loader />
                </div>
            ) : (
                <>
                    <div className={cx('products-list')}>
                        {productsList.map(item => (
                            <div className={cx('product-item')} key={item.id}>
                                <ProductItem data={item} />
                            </div>
                        ))}
                    </div>
                    <div className={cx('more-details-link')}>
                        <Link to={config.routes.adminProducts}>
                            <Button size="small" variant="outlined">
                                Xem thêm
                            </Button>
                        </Link>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductsStatistics;
