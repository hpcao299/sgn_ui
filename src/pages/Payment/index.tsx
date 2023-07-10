import cartApi from '@/api/cartApi';
import { Loader, PageDetails } from '@/components/elements';
import ErrorHandler from '@/components/layouts/ErrorHandler/ErrorHandler';
import config from '@/config';
import { CartItem as CartItemType, ErrorResponse } from '@/types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Payment.module.css';
import PaymentForm from './components/PaymentForm';
import PaymentItem from './components/PaymentItem';

const cx = classNames.bind(styles);

const paths = [
    {
        title: 'Trang chủ',
        to: config.routes.home,
    },
    {
        title: 'Giỏ hàng',
        to: config.routes.cart,
    },
    {
        title: 'Thanh toán',
        to: config.routes.payment,
    },
];

const PaymentPage = () => {
    const { data, isLoading, error } = cartApi.getCartItems();
    const cartItems: CartItemType[] = data?.data;
    const total = cartItems?.reduce((acc, item) => acc + item.total, 0) || 0;

    return (
        <>
            <PageDetails title="Thanh toán" paths={paths} />
            <div className="container">
                {error && <ErrorHandler error={error as ErrorResponse} />}
                {cartItems?.length === 0 || !cartItems ? (
                    <div className={cx('empty-text')}>
                        <p>Giỏ hàng trống không thể thanh toán</p>
                        <Link to={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                    </div>
                ) : (
                    <div className={cx('content')}>
                        <div className={cx('products-content')}>
                            {isLoading && <Loader className={cx('loader')} />}
                            <div className={cx('products-list', isLoading && 'loading')}>
                                {cartItems?.map(item => (
                                    <PaymentItem key={item.id} data={item} />
                                ))}

                                <div className={cx('total-price')}>
                                    <div>Tổng cộng:</div>
                                    <div>{total.toLocaleString()}VNĐ</div>
                                </div>
                            </div>
                        </div>
                        <div className={cx('payment-form-wrapper')}>
                            <PaymentForm />
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default PaymentPage;
