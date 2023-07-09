import cartApi from '@/api/cartApi';
import { ReactComponent as GarbageIcon } from '@/assets/icons/garbage.svg';
import loadingImg from '@/assets/images/loading-img.png';
import { QuantitySelector } from '@/components/elements';
import { useDebounce } from '@/hooks';
import { CartItem as CartItemType } from '@/types';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import styles from './CartItem.module.css';

const cx = classNames.bind(styles);

interface CartItemProps {
    data: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    const { mutate, cache } = useSWRConfig();
    const [quantity, setQuantity] = useState<number>(data.quantity);
    const isFirstRender = useRef<boolean>(true);
    const debouncedQuantity = useDebounce({
        value: quantity,
        milliSeconds: 400,
    });

    const handleChangeQuantity = (value: number) => {
        setQuantity(value);
    };

    useEffect(() => {
        if (isFirstRender.current) {
            isFirstRender.current = false;
            return;
        }

        const updateItemQuantity = async () => {
            try {
                await cartApi.updateQuantity(data.id, debouncedQuantity as number);
                // notify
                mutate('/cart/items');
            } catch (error) {
                // notify
                console.error(error);
            }
        };

        updateItemQuantity();
    }, [data.id, debouncedQuantity, mutate]);

    const handleDeleteItem = async () => {
        try {
            await cartApi.deleteItemFromCart(data.id);
            //notify
            cache.delete('/cart/items');
            mutate('/cart/items');
        } catch (error) {
            // notify
            console.error(error);
        }
    };

    return (
        <div className={cx('grid')}>
            <div className={cx('grid-item', 'cart-item-details')}>
                <Link to={`/products/${data.slug}`} className={cx('cart-item-details')}>
                    <LazyLoadImage
                        src={data.image_url}
                        alt={data.title}
                        effect="blur"
                        height="100%"
                        placeholderSrc={loadingImg}
                        style={{ backgroundColor: '#dadada' }}
                    />
                    <h1>{data.title}</h1>
                </Link>
            </div>
            <div className={cx('grid-item', 'cart-item-price')}>
                {data.original_price.toLocaleString()}VNĐ
            </div>
            <div className={cx('grid-item')}>
                <QuantitySelector handleChange={handleChangeQuantity} value={data.quantity} />
            </div>
            <div className={cx('grid-item', 'cart-item-price')}>
                {data.total.toLocaleString()}VNĐ
            </div>
            <div className={cx('grid-item', 'cart-garbage-icon', 'small-grid-item')}>
                <button
                    className={cx('delete-btn')}
                    aria-label="Xoá sản phẩm"
                    onClick={handleDeleteItem}
                >
                    <GarbageIcon />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
