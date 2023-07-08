import axios from 'axios';
// import { auth } from '~/config/firebase';

// const getFirebaseToken = async () => {
//     const currentUser = auth.currentUser;
//     if (currentUser) return currentUser.getIdToken();

//     // User hasn't logged in
//     const { isSignedIn } = JSON.parse(localStorage.getItem('auth') || '');
//     if (!isSignedIn) return null;

//     // User has logged in but application is loading
//     return new Promise((resolve, reject) => {
//         const waitTimer = setTimeout(() => reject(null), 1200);

//         const unRegisterAuthObserver = auth.onAuthStateChanged(async user => {
//             if (!user) reject(null);

//             const token = await user?.getIdToken();
//             resolve(token);

//             unRegisterAuthObserver();
//             clearTimeout(waitTimer);
//         });
//     });
// };

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_APP_SERVER_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
});

axiosClient.interceptors.request.use(
    async function (config) {
        // Handle Token
        // const token = await getFirebaseToken();
        const token = null;
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
