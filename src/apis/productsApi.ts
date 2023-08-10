import useSWR from 'swr';

const productsApi = {
    useRelatedProducts(slug: string) {
        return useSWR(`/products/related?slug=${slug}`);
    },
};

export default productsApi;
