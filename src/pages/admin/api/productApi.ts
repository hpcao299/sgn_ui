import axiosClient from '@/api/axiosClient';
import { ProductDetailsDto } from '@/types';
import useSWR from 'swr';

const productApi = {
    useProductsList() {
        return useSWR('/products/list');
    },
    useProductDetails(id: number) {
        return useSWR(`/products/details/${id}`);
    },
    addNewProduct(details: ProductDetailsDto) {
        const url = '/admin/products/new';
        return axiosClient.post(url, details);
    },
    editProduct(id: number, details: ProductDetailsDto) {
        const url = `/admin/products/${id}`;
        return axiosClient.put(url, details);
    },
    deleteProduct(id: number) {
        const url = `/admin/products/${id}`;
        return axiosClient.delete(url);
    },
};

export default productApi;
