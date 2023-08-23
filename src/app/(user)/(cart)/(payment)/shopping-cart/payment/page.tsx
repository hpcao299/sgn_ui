import config from '@/config';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import { NextPage } from 'next';
import Link from 'next/link';
import styles from './Payment.module.css';
import PaymentForm from './PaymentForm';
import PaymentItem from './PaymentItem';

const cx = classNames.bind(styles);

const cartItems = [
    {
        id: 7,
        quantity: 1,
        created_at: new Date(),
        total: 10000,
        title: 'Giấy gói hàng size 70cm x 100cm',
        slug: 'Giấy-gói-hàng-size-70cm-x-100cm',
        image_url:
            'https://i.ibb.co/FntCFCx/cong-ty-tnhh-dau-tu-thuong-mai-sai-gon-nguyen-822c7774.jpg',
        original_price: 10000,
    },
];

const PaymentPage: NextPage = () => {
    const total = cartItems?.reduce((acc, item) => acc + item.total, 0) || 0;

    return (
        <div className="container">
            {/* {error && <ErrorHandler error={error as ErrorResponse} />} */}
            {cartItems?.length === 0 || !cartItems ? (
                <div className={cx('empty-text')}>
                    <p>Giỏ hàng trống không thể thanh toán</p>
                    <Link href={config.routes.home}>Lựa chọn các sản phẩm khác</Link>
                </div>
            ) : (
                <div className={cx('content')}>
                    <div className={cx('products-content')}>
                        {/* {isLoading && <Loader className={cx('loader')} />} */}
                        {/* isLoading && 'loading' */}
                        <div className={cx('products-list')}>
                            {cartItems?.map(item => <PaymentItem key={item.id} data={item} />)}

                            <div className={cx('total-price')}>
                                <div>Tổng cộng:</div>
                                <div>{formattedPrice(total)}</div>
                            </div>
                        </div>
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
