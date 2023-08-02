import productsApi from '@/api/productsApi';
import loadingImg from '@/assets/images/loading-img.png';
import { Loader, PageDetails, RenderOnView } from '@/components/elements';
import config from '@/config';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';
import ProductActions from './components/ProductActions';
import meta from '@/constants/meta';

const RelatedProducts = React.lazy(() => import('./components/RelatedProducts'));

const cx = classNames.bind(styles);

const ProductsDetailsPage: React.FC = () => {
    const params = useParams();
    const { data, isLoading, error } = productsApi.useProductDetails(params.slug || '');
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
            <Helmet>
                <title>{details?.title}</title>
                <meta property="og:title" content={details?.title} />
                <meta name="description" content={meta.desc.productDetails} />
                <meta property="og:description" content={meta.desc.productDetails} />
                <link rel="canonical" href={`/products/${details?.slug}`} />
                <meta
                    property="og:url"
                    content={window.location.origin + `/products/${details?.slug}`}
                />
                <meta name="robots" content="index, follow" />
            </Helmet>

            {isLoading && <Loader size="medium" className={cx('loader')} />}
            {error && <p style={{ textAlign: 'center', fontSize: '22px' }}>{error.message}</p>}

            {!details && !isLoading ? (
                <div className="flex-center" style={{ marginTop: '24px', fontSize: '20px' }}>
                    Sản phẩm không tìm thấy
                </div>
            ) : (
                <>
                    <div className={cx('product-details-wrapper', isLoading && 'loading')}>
                        <PageDetails title={details?.title} paths={paths} />
                        <div style={{ paddingBottom: '72px' }} className="container">
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
                                        <h2 className={cx('product-title')}>{details?.title}</h2>
                                        <div className={cx('product-price')}>
                                            {formattedPrice(details?.price)}
                                        </div>
                                        <p className={cx('product-desc')}>{details?.short_desc}</p>
                                    </div>
                                    {data && <ProductActions productId={details?.id} />}
                                </div>
                            </div>
                            <div className={cx('product-sub-content')}>
                                {data && (
                                    <>
                                        <div className={cx('product-content-header')}>
                                            <p>Mô tả</p>
                                        </div>
                                        <p className={cx('product-full-desc')}>
                                            {details?.full_desc}
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <Suspense
                        fallback={
                            <div className="flex-center" style={{ margin: '18px 0' }}>
                                <Loader size="small" />
                            </div>
                        }
                    >
                        <RenderOnView>
                            <RelatedProducts />
                        </RenderOnView>
                    </Suspense>
                </>
            )}
        </>
    );
};

export default ProductsDetailsPage;
