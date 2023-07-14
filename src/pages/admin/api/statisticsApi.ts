import useSWR from 'swr';

const statisticApi = {
    useGeneralStatistics() {
        return useSWR('/statistics/general');
    },
    useOrdersStatistics() {
        return useSWR('/statistics/orders');
    },
    useProductsStatistics() {
        return useSWR('/statistics/products');
    },
    useProductStatisticsById(id: number) {
        return useSWR(`/statistics/products/${id}`);
    },
};

export default statisticApi;
