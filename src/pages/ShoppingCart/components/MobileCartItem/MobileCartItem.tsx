import cartApi from '@/api/cartApi';
import { ReactComponent as GarbageIcon } from '@/assets/icons/garbage.svg';
import loadingImg from '@/assets/images/loading-img.png';
import { QuantitySelector } from '@/components/elements';
import { useDebounce } from '@/hooks';
import { CartItem } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import { useSWRConfig } from 'swr';
import styles from './MobileCartItem.module.css';

const cx = classNames.bind(styles);

interface MobileCartItemProps {
    data: CartItem;
}

const MobileCartItem: React.FC<MobileCartItemProps> = ({ data }) => {
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
                mutate('/cart/items');
            } catch (error) {
                console.error(error);
            }
        };

        updateItemQuantity();
    }, [data.id, debouncedQuantity, mutate]);

    const handleDeleteItem = async () => {
        try {
            await cartApi.deleteItemFromCart(data.id);

            cache.delete('/cart/items');
            mutate('/cart/items');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className={cx('cart-item')}>
            <div className={cx('item-img')}>
                <Link to={`/products/${data.slug}`}>
                    <LazyLoadImage
                        src={data.image_url}
                        alt={data.title}
                        effect="blur"
                        height="100%"
                        placeholderSrc={loadingImg}
                        style={{ backgroundColor: '#dadada' }}
                    />
                </Link>
            </div>
            <div className={cx('item-details')}>
                <Link to={`/products/${data.slug}`}>
                    <h1 className={cx('item-title')}>{data.title}</h1>
                </Link>
                <div className={cx('item-info')}>
                    <p className={cx('item-price')}>{formattedPrice(data.total)}</p>
                    <QuantitySelector handleChange={handleChangeQuantity} value={data.quantity} />
                </div>
                <button
                    className={cx('delete-btn')}
                    onClick={handleDeleteItem}
                    aria-label="Xoá sản phẩm"
                >
                    <GarbageIcon />
                </button>
            </div>
        </div>
    );
};

export default MobileCartItem;
