import loadingImg from '@/assets/images/loading-img.png';
import { Button, Loader } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useNotifyContext } from '@/contexts/NotifyContext';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate, useParams } from 'react-router-dom';
import productApi from '../api/productApi';
import styles from './ProductDetails.module.css';
import ProductHasSold from './ProductHasSold';

const cx = classNames.bind(styles);

const ProductDetailsPage: React.FC = () => {
    const { addNewNotification } = useNotifyContext();
    const navigate = useNavigate();
    const params = useParams();
    const { data, isLoading } = productApi.useProductDetails(Number(params.id));
    const details = data?.data;

    const handleDeleteProduct = async () => {
        try {
            await productApi.deleteProduct(Number(params.id));
            addNewNotification(constants.notifications.DELETE_PRODUCT_SUCCESS);
            navigate(config.routes.adminProducts);
        } catch (error) {
            addNewNotification(constants.notifications.DELETE_PRODUCT_FAILED);
        }
    };

    return isLoading ? (
        <div className="flex-center">
            <Loader />
        </div>
    ) : (
        <div>
            <h5 className="section-heading">{details.title}</h5>
            <ProductHasSold />
            <div className={cx('product-details')}>
                <LazyLoadImage
                    src={details.image_url}
                    alt={details.title}
                    className={cx('product-img')}
                    placeholderSrc={loadingImg}
                    effect="blur"
                    height="100%"
                    style={{ backgroundColor: '#dadada' }}
                />
                <div className={cx('product-info')}>
                    <h3 className={cx('product-title')}>{details.title}</h3>
                    <p className={cx('product-price')}>Giá bán: {formattedPrice(details.price)}</p>
                    <div className={cx('product-short-desc')}>{details.short_desc}</div>
                    <div className={cx('product-actions')}>
                        <Button>Chỉnh sửa thông tin</Button>
                        <Button variant="outlined" color="red" onClick={handleDeleteProduct}>
                            Xoá sản phẩm
                        </Button>
                    </div>
                </div>
            </div>
            <div className={cx('product-more-info')}>
                <h5 className="section-heading">Mô tả đầy đủ</h5>
                <p className={cx('product-full-desc')}>{details.full_desc}</p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
