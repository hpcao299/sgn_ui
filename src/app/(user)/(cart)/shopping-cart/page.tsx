import { CartItem as CartItemType } from '@/types';
import classNames from 'classnames/bind';
import { NextPage } from 'next';
import CartActions from './CartActions';
import styles from './ShoppingCart.module.css';
import dynamic from 'next/dynamic';

const CartItemsList = dynamic(() => import('./CartItemsList'), { ssr: false });

const cx = classNames.bind(styles);

const cartItems: CartItemType[] = [
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

const ShoppingCartPage: NextPage = () => {
    return (
        <div className={cx('content')}>
            {/* {(isLoading || isValidating) && <Loader className={cx('loader')} />} */}

            <div
                className={cx(
                    'container',
                    'cart-container',
                    // (isLoading || isValidating) && 'loading',
                )}
            >
                <CartItemsList data={cartItems} />
                {/* {/* {error && <ErrorHandler error={error as ErrorResponse} />} */}
                {cartItems?.length > 0 && <CartActions data={cartItems} />}
            </div>
        </div>
    );
};

export default ShoppingCartPage;
