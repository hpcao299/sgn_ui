import { PageDetails } from '@/components/elements';
import classNames from 'classnames/bind';
import styles from './Payment.module.css';
import config from '@/config';
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
    return (
        <>
            <PageDetails title="Thanh toán" paths={paths} />
            <div className="container">
                <div className={cx('content')}>
                    <div className={cx('products-list')}>
                        <PaymentItem />
                        <PaymentItem />
                        <PaymentItem />
                        <div className={cx('total-price')}>
                            <div>Tổng cộng:</div>
                            <div>25,000VNĐ</div>
                        </div>
                    </div>
                    <div className={cx('payment-form-wrapper')}>
                        <PaymentForm />
                    </div>
                </div>
            </div>
        </>
    );
};

export default PaymentPage;
