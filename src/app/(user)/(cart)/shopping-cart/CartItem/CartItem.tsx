'use client';

// import cartApi from '@/api/cartApi';
import GarbageIcon from '@/assets/icons/garbage.svg';
// import { QuantitySelector } from '@/components';
// import { useDebounce } from '@/hooks';
import { CartItem as CartItemType } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
// import { useSWRConfig } from 'swr';
import { Image, QuantitySelector } from '@/components';
import styles from './CartItem.module.css';
import Link from 'next/link';

const cx = classNames.bind(styles);

interface CartItemProps {
    data: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {
    // const { mutate, cache } = useSWRConfig();
    const [quantity, setQuantity] = useState<number>(data.quantity);
    const isFirstRender = useRef<boolean>(true);
    // const debouncedQuantity = useDebounce({
    //     value: quantity,
    //     milliSeconds: 400,
    // });

    const handleChangeQuantity = (value: number) => {
        setQuantity(value);
    };

    // useEffect(() => {
    //     if (isFirstRender.current) {
    //         isFirstRender.current = false;
    //         return;
    //     }

    //     const updateItemQuantity = async () => {
    //         try {
    //             await cartApi.updateQuantity(data.id, debouncedQuantity as number);
    //             mutate('/cart/items');
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };

    //     updateItemQuantity();
    // }, [data.id, debouncedQuantity, mutate]);

    // const handleDeleteItem = async () => {
    //     try {
    //         await cartApi.deleteItemFromCart(data.id);

    //         cache.delete('/cart/items');
    //         mutate('/cart/items');
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };

    return (
        <div className={cx('grid')}>
            <div className={cx('grid-item', 'cart-item-details')}>
                <Link href={`/products/${data.slug}`} className={cx('cart-item-details')}>
                    <Image
                        src={data.image_url}
                        alt={data.title}
                        className={cx('product-img')}
                        style={{ backgroundColor: '#f0f0f0' }}
                        width={70}
                        height={70}
                        loading="lazy"
                        // onError={handleImageError}
                    />
                    <h2>{data.title}</h2>
                </Link>
            </div>
            <div className={cx('grid-item', 'cart-item-price')}>
                {formattedPrice(data.original_price)}
            </div>
            <div className={cx('grid-item')}>
                <QuantitySelector handleChange={handleChangeQuantity} value={data.quantity} />
            </div>
            <div className={cx('grid-item', 'cart-item-price')}>{formattedPrice(data.total)}</div>
            <div className={cx('grid-item', 'cart-garbage-icon', 'small-grid-item')}>
                <button
                    className={cx('delete-btn')}
                    aria-label="Xoá sản phẩm"
                    // onClick={handleDeleteItem}
                >
                    <GarbageIcon />
                </button>
            </div>
        </div>
    );
};

export default CartItem;
