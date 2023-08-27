import { ConfirmOrderDto } from '@/types';
import axiosClient from './axiosClient';
import useSWR from 'swr';
import swr from '@/config/swr';

const orderApi = {
    confirmOrder(values: ConfirmOrderDto) {
        const url = '/orders/confirm';
        return axiosClient.post(url, values);
    },
    getOrdersList() {
        return useSWR('/orders/list', swr.fetcherWithToken, {
            focusThrottleInterval: 0,
            dedupingInterval: 0,
        });
    },
};

export default orderApi;
