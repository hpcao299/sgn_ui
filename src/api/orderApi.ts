import { ConfirmOrderDto } from '@/types';
import axiosClient from './axiosClient';

const orderApi = {
    confirmOrder(values: ConfirmOrderDto) {
        const url = '/orders/confirm';
        return axiosClient.post(url, values);
    },
};

export default orderApi;
