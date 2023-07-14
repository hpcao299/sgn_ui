/* eslint-disable react-hooks/rules-of-hooks */
import { ConfirmOrderDto } from '@/types';
import axiosClient, { fetcherWithToken } from './axiosClient';
import useSWR from 'swr';

const orderApi = {
    confirmOrder(values: ConfirmOrderDto) {
        const url = '/api/orders/confirm';
        return axiosClient.post(url, values);
    },
    getOrdersList() {
        return useSWR('/orders/list', fetcherWithToken, {
            focusThrottleInterval: 0,
            dedupingInterval: 0,
        });
    },
};

export default orderApi;
