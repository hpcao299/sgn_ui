import useSWR from 'swr';

const orderApi = {
    useOrdersList() {
        return useSWR('/orders/list');
    },
    useOrderDetails(id: number) {
        return useSWR(`/orders/details/${id}`);
    },
    useOrderItems(id: number) {
        return useSWR(`/orders/items/${id}`);
    },
};

export default orderApi;
