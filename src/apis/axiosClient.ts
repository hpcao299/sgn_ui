import axios from 'axios';
import getFirebaseToken from './getFirebaseToken';

const axiosClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async function (config) {
        // Handle Token
        const token = await getFirebaseToken();
        if (token && config.headers !== undefined) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    function (err) {
        return Promise.reject(err);
    },
);

axiosClient.interceptors.response.use(
    function (response) {
        if (response && response.data) {
            return response.data;
        }

        return response;
    },
    function (err) {
        return Promise.reject(err);
    },
);

export default axiosClient;
