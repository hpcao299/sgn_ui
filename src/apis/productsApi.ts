import useSWR from 'swr';
import axiosClient from './axiosClient';

const productsApi = {
    useRelatedProducts(slug: string) {
        return useSWR(`/products/related?slug=${slug}`);
    },
    searchProducts(query: string, categorySlug?: string) {
        const url = `/products/search?q=${query}${categorySlug ? `&category=${categorySlug}` : ''}`;
        return axiosClient.get(url);
    },
};

export default productsApi;
