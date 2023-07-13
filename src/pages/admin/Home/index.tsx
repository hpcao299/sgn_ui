import { Button } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductItem from '../components/ProductItem';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

const HomePage: React.FC = () => {
    return (
        <div>
            <div className={cx('statistics')}>
                <div className={cx('statistic-item')}>
                    <h6>Doanh thu bán hàng</h6>
                    <div className={cx('statistic-value')}>5,000,000 VNĐ</div>
                    <div>Tháng này</div>
                </div>
                <div className={cx('statistic-item')}>
                    <h6>Doanh thu bán hàng</h6>
                    <div className={cx('statistic-value')}>5,000,000 VNĐ</div>
                    <div>Tháng này</div>
                </div>
                <div className={cx('statistic-item')}>
                    <h6>Doanh thu bán hàng</h6>
                    <div className={cx('statistic-value')}>5,000,000 VNĐ</div>
                    <div>Tháng này</div>
                </div>
            </div>
            <div className={cx('orders-list')}>
                <h5 className={cx('section-heading')}>Đơn hàng gần đây</h5>
                <div>
                    <div className={cx('order-item', 'order-header')}>
                        <div>ID</div>
                        <div>Tên người đặt</div>
                        <div>Số điện thoại</div>
                        <div>Tổng tiền</div>
                        <div>Đặt vào</div>
                    </div>
                    <div className={cx('order-item')}>
                        <div>1</div>
                        <div>Phuc Cao</div>
                        <div>0901547769</div>
                        <div>5,000,000 VND</div>
                        <div>21:47 12/7/2023</div>
                    </div>
                    <div className={cx('order-item')}>
                        <div>1</div>
                        <div>Phuc Cao</div>
                        <div>0901547769</div>
                        <div>5,000,000 VND</div>
                        <div>21:47 12/7/2023</div>
                    </div>
                </div>
                <div className={cx('more-details-link')}>
                    <Link to={config.routes.adminOrders}>
                        <Button size="small" variant="outlined">
                            Xem thêm
                        </Button>
                    </Link>
                </div>
            </div>
            <div className={cx('products-wrapper')}>
                <h5 className={cx('section-heading')}>Sản phẩm bán chạy của web</h5>
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
                    <div className={cx('product-item')}>
                        <ProductItem />
                    </div>
                </div>
                <div className={cx('more-details-link')}>
                    <Link to={config.routes.adminProducts}>
                        <Button size="small" variant="outlined">
                            Xem thêm
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
