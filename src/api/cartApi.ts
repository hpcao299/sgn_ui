/* eslint-disable react-hooks/rules-of-hooks */
import axiosClient, { fetcherWithToken } from './axiosClient';
import useSWR from 'swr';

const cartApi = {
    getCartItems() {
        return useSWR('/cart/items', fetcherWithToken, {
            focusThrottleInterval: 0,
            dedupingInterval: 0,
        });
    },
    addItemToCart(productId: number, quantity: number) {
        const url = `/cart/items/new-item/${productId}?quantity=${quantity}`;
        return axiosClient.post(url);
    },
    updateQuantity(productId: number, quantity: number) {
        const url = `/cart/items/quantity/${productId}`;
        return axiosClient.patch(url, { quantity });
    },
    deleteItemFromCart(productId: number) {
        const url = `/cart/items/delete-item/${productId}`;
        return axiosClient.delete(url);
    },
};

export default cartApi;
