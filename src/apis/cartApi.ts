import axiosClient from './axiosClient';

const cartApi = {
    addItemToCart(productId: number, quantity: number) {
        const url = `/cart/items/new-item/${productId}?quantity=${quantity}`;
        return axiosClient.post(url);
    },
};

export default cartApi;
