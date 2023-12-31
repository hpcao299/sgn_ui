import axiosClient from '@/apis/axiosClient';

const MILLISECONDS_IN_1_HOUR = 60 * 60 * 1000;
const MILLISECONDS_IN_3_SECONDS = 3 * 1000;

const swr = {
    value: {
        fetcher: (url: string) =>
            fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}${url}`).then(res => res.json()),
        dedupingInterval: MILLISECONDS_IN_1_HOUR,
        errorRetryInterval: MILLISECONDS_IN_3_SECONDS,
        errorRetryCount: 10,
        keepPreviousData: true,
    },
    fetcherWithToken: (url: string) => axiosClient.get(`${url}`),
};

export default swr;
