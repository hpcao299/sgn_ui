import useSWR from 'swr';

const productApi = {
    useProductsList() {
        return useSWR('/products/list');
    },
    useProductDetails(id: number) {
        return useSWR(`/products/details/${id}`);
    },
};

export default productApi;
