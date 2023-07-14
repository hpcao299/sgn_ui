import { getFirebaseToken } from '@/api/axiosClient';
import axios from 'axios';

const uploaderApi = {
    async uploadAnImage(file: File) {
        const token = await getFirebaseToken();
        const formData = new FormData();
        formData.append('image', file);

        return axios
            .post(`${import.meta.env.VITE_APP_UPLOADER_BASE_URL}/photo`, formData, {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then(data => data.data)
            .catch(err => err.response.data);
    },
};

export default uploaderApi;
