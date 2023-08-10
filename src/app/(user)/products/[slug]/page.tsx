import { PageDetails, Image } from '@/components';
import { getProductDetails } from '@/libs/products';
import { formattedPrice } from '@/utils';
import { Metadata } from 'next';
import React from 'react';
import styles from './ProductDetails.module.css';
import classNames from 'classnames/bind';
import config from '@/config';
import dynamic from 'next/dynamic';
import { SWRProvider } from '@/app/swr-provider';

const RelatedProducts = dynamic(() => import('./RelatedProducts'));

const cx = classNames.bind(styles);

interface Props {
    params: { slug: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const slug = params.slug;

    const res = await fetch(`http://localhost:8000/api/products/details/${slug}`);
    const product = await res.json();

    return {
        title: product.data.title,
        description: `Thông tin chi tiết về ${product.data.title} từ Công Ty TNHH Đầu Tư Thương Mại Sài Gòn Nguyễn. Xem thông số kỹ thuật, giá cả và mua hàng online ngay!`,
        alternates: { canonical: `${process.env.APP_URL}/products/${product.data.slug}` },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: product.data.title,
            description: `Thông tin chi tiết về ${product.data.title} từ Công Ty TNHH Đầu Tư Thương Mại Sài Gòn Nguyễn. Xem thông số kỹ thuật, giá cả và mua hàng online ngay!`,
            type: 'website',
            locale: 'vi_VN',
            url: `${process.env.APP_URL}/products/${product.data.slug}`,
            images: {
                url: product.data.image_url,
                height: 600,
                width: 600,
                alt: product.data.title,
            },
        },
        twitter: {
            title: product.data.title,
            description: `Thông tin chi tiết về ${product.data.title} từ Công Ty TNHH Đầu Tư Thương Mại Sài Gòn Nguyễn. Xem thông số kỹ thuật, giá cả và mua hàng online ngay!`,
            site: `${process.env.APP_URL}/products/${product.data.slug}`,
            images: {
                url: product.data.image_url,
                height: 600,
                width: 600,
                alt: product.data.title,
            },
        },
    };
};

const ProductDetailsPage = async ({ params }: Props) => {
    const data = await getProductDetails(params.slug);
    const details = data.data;

    const paths = [
        {
            title: 'Trang chủ',
            to: config.routes.home,
        },
        { title: 'Sản phẩm', to: config.routes.products },
        { title: details?.title, to: `/products/${details?.slug}` },
    ];

    return (
        <SWRProvider>
            <div className={cx('product-details-wrapper')}>
                <PageDetails title={details.title} paths={paths} />
                <div style={{ paddingBottom: '72px' }} className="container">
                    <div className={cx('product-main-content')}>
                        <div className={cx('product-image')}>
                            <Image
                                src={details.image_url}
                                alt={details.title}
                                style={{ backgroundColor: '#dadada' }}
                                width={500}
                                height={500}
                            />
                        </div>
                        <div className={cx('product-details')}>
                            <div className={cx('product-info')}>
                                <h1 className={cx('product-title')}>{details.title}</h1>
                                <div className={cx('product-price')}>
                                    {formattedPrice(details.price)}
                                </div>
                                <p className={cx('product-desc')}>{details.short_desc}</p>
                            </div>
                            {/* {data && <ProductActions productId={details.id} />} */}
                        </div>
                    </div>
                    <div className={cx('product-sub-content')}>
                        {data && (
                            <>
                                <div className={cx('product-content-header')}>
                                    <p>Mô tả</p>
                                </div>
                                <p className={cx('product-full-desc')}>{details.full_desc}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
            <RelatedProducts slug={params.slug} />
        </SWRProvider>
    );
};

export default ProductDetailsPage;
