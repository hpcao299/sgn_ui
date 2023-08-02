import cartApi from '@/api/cartApi';
import { Loader, PageDetails } from '@/components/elements';
import ErrorHandler from '@/components/layouts/ErrorHandler/ErrorHandler';
import config from '@/config';
import { useAuthContext } from '@/contexts/AuthContext';
import { CartItem as CartItemType, ErrorResponse } from '@/types';
import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import styles from './ShoppingCart.module.css';
import CartActions from './components/CartActions';
import CartItem from './components/CartItem';
import MobileCartItem from './components/MobileCartItem';
import meta from '@/constants/meta';

const cx = classNames.bind(styles);

const paths = [
    {
        to: config.routes.home,
        title: 'Trang chủ',
    },
    {
        to: config.routes.cart,
        title: 'Giỏ hàng',
    },
];

const ShoppingCartPage: React.FC = () => {
    const { setNumItems } = useAuthContext();
    const { data, isLoading, isValidating, error } = cartApi.getCartItems();
    const cartItems: CartItemType[] = data?.data;

    useEffect(() => {
        if (cartItems) {
            setNumItems(cartItems.length);
        }
    }, [cartItems, setNumItems]);

    return (
        <>
            <Helmet>
                <title>{meta.title.cart}</title>
                <meta property="og:title" content={meta.title.cart} />
                <meta name="description" content={meta.desc.cart} />
                <meta property="og:description" content={meta.desc.cart} />
                <link rel="canonical" href={config.routes.cart} />
                <meta property="og:url" content={window.location.origin + config.routes.cart} />
                <meta name="robots" content="index, follow" />
            </Helmet>

            <PageDetails title="Giỏ hàng" paths={paths} />
            <div className={cx('content')}>
                {(isLoading || isValidating) && <Loader className={cx('loader')} />}

                <div
                    className={cx(
                        'container',
                        'cart-container',
                        (isLoading || isValidating) && 'loading',
                    )}
                >
                    <MediaQuery maxWidth={739}>
                        {cartItems?.length === 0 ? (
                            <div className={cx('empty-text')}>
                                <p>Giỏ hàng trống</p>
                                <Link to={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                            </div>
                        ) : (
                            cartItems?.map((item: CartItemType) => (
                                <MobileCartItem key={item.id} data={item} />
                            ))
                        )}
                    </MediaQuery>

                    <MediaQuery minWidth={740}>
                        <div className={cx('grid-wrapper')}>
                            <div className={cx('grid', 'grid-header')}>
                                <div className={cx('grid-item')}>sản phẩm</div>
                                <div className={cx('grid-item')}>giá</div>
                                <div className={cx('grid-item')}>số lượng</div>
                                <div className={cx('grid-item')}>tạm tính</div>
                                <div className={cx('grid-item', 'small-grid-item')}>xoá</div>
                            </div>
                            {cartItems?.length === 0 && !isLoading ? (
                                <div className={cx('empty-text')}>
                                    <p>Giỏ hàng trống</p>
                                    <Link to={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                                </div>
                            ) : (
                                cartItems?.map((item: CartItemType) => (
                                    <CartItem key={item.id} data={item} />
                                ))
                            )}
                        </div>
                    </MediaQuery>
                    {error && <ErrorHandler error={error as ErrorResponse} />}
                    {cartItems?.length > 0 && <CartActions data={cartItems} />}
                </div>
            </div>
        </>
    );
};

export default ShoppingCartPage;
