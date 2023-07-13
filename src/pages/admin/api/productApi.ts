import axiosClient from '@/api/axiosClient';
import { NewProductDto } from '@/types';
import useSWR from 'swr';

const productApi = {
    useProductsList() {
        return useSWR('/products/list');
    },
    useProductDetails(id: number) {
        return useSWR(`/products/details/${id}`);
    },
    addNewProduct(details: NewProductDto) {
        const url = '/admin/products/new';
        return axiosClient.post(url, details);
    },
    deleteProduct(id: number) {
        const url = `/admin/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
