'use client';

import cartApi from '@/apis/cartApi';
import { ErrorHandler, Loader } from '@/components';
import config from '@/config';
import { CartItem as CartItemType, ErrorResponse } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from './Payment.module.css';
import PaymentForm from './PaymentForm';
import PaymentItem from './PaymentItem';

const cx = classNames.bind(styles);

const PaymentPage: NextPage = () => {
    const { data, isLoading, error } = cartApi.getCartItems();
    const cartItems: CartItemType[] = data?.data;
    const total = cartItems?.reduce((acc, item) => acc + item.total, 0) || 0;

    return (
        <div className="container">
            {error && <ErrorHandler error={error as ErrorResponse} />}
            {cartItems?.length === 0 && !isLoading ? (
                <div className={cx('empty-text')}>
                    <p>Giỏ hàng trống không thể thanh toán</p>
                    <Link href={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                </div>
            ) : (
                <div className={cx('content')}>
                    <div className={cx('products-content')}>
                        {isLoading ? (
                            <Loader className={cx('loader')} />
                        ) : (
                            <div className={cx('products-list', isLoading && 'loading')}>
                                {cartItems?.map(item => <PaymentItem key={item.id} data={item} />)}

                                <div className={cx('total-price')}>
                                    <div>Tổng cộng:</div>
                                    <div>{formattedPrice(total)}</div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className={cx('payment-form-wrapper')}>
                        <PaymentForm />
                    </div>
                </div>
            )}
        </div>
    );
};

export default PaymentPage;
