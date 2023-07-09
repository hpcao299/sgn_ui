import productsApi from '@/api/productsApi';
import loadingImg from '@/assets/images/loading-img.png';
import { Button, Loader, PageDetails, QuantitySelector, RenderOnView } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const RelatedProducts = React.lazy(() => import('./components/RelatedProducts'));

const cx = classNames.bind(styles);

const ProductsDetailsPage: React.FC = () => {
    const params = useParams();
    const { data, isLoading } = productsApi.useProductDetails(params.slug || '');
    const details = data?.data;

    const paths = [
        {
            title: 'Trang chủ',
            to: config.routes.home,
        },
        { title: 'Sản phẩm', to: config.routes.products },
        { title: details?.title, to: `/products/${details?.slug}` },
    ];

    return (
        <>
            {isLoading && <Loader size="medium" className={cx('loader')} />}

            <div className={cx('product-details', isLoading && 'loading')}>
                <PageDetails title={details?.title} paths={paths} />
                <div style={{ paddingBottom: '100px' }} className="container">
                    <div className={cx('product-main-content')}>
                        <div className={cx('product-image')}>
                            <LazyLoadImage
                                src={details?.image_url}
                                alt={details?.title}
                                effect="blur"
                                height="100%"
                                placeholderSrc={loadingImg}
                                style={{ backgroundColor: '#dadada' }}
                            />
                        </div>
                        <div className={cx('product-details')}>
                            <div className={cx('product-info')}>
                                <h1 className={cx('product-title')}>{details?.title}</h1>
                                <div className={cx('product-price')}>
                                    {details?.price.toLocaleString()}VNĐ
                                </div>
                                <p className={cx('product-desc')}>{details?.short_desc}</p>
                            </div>
                            <QuantitySelector />
                            <div className={cx('product-actions')}>
                                <Button>đặt ngay</Button>
                                <Button variant="outlined">thêm vào giỏ hàng</Button>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-sub-content')}>
                        <div className={cx('product-content-header')}>
                            <p>Mô tả</p>
                        </div>
                        <p className={cx('product-full-desc')}>{details?.full_desc}</p>
                    </div>
                </div>
            </div>
            <RenderOnView>
                <RelatedProducts />
            </RenderOnView>
        </>
    );
};

export default ProductsDetailsPage;
