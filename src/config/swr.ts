import axiosClient from '@/api/axiosClient.js';

const MILLISECONDS_IN_5_MINUTES = 1000 * 60 * 5;
const MILLISECONDS_IN_3_SECONDS = 3 * 1000;

const swr = {
    value: {
        fetcher: (url: string) => axiosClient.get(url),
        dedupingInterval: MILLISECONDS_IN_5_MINUTES,
        errorRetryInterval: MILLISECONDS_IN_3_SECONDS,
        errorRetryCount: 10,
        keepPreviousData: true,
    },
};

export default swr;
