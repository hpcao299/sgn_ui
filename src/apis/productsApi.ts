import useSWR from 'swr';
import axiosClient from './axiosClient';

const productsApi = {
    useRelatedProducts(slug: string) {
        return useSWR(`/products/related?slug=${slug}`);
    },
    searchProducts(query: string, noLimit?: boolean) {
        const url = `/products/search?q=${query}${noLimit ? `&no_limit=true` : ''}`;
        return axiosClient.get(url);
    },
};

export default productsApi;
