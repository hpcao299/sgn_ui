import { RegisterUserDto, UserDetailsDto } from '@/types';
import axiosClient from './axiosClient';

const usersApi = {
    async registerUser(details: RegisterUserDto) {
        const url = '/users/register';

        return axiosClient.post(url, details);
    },
    getCurrentUser() {
        const url = '/users/current-user';
        return axiosClient.get(url);
    },
    updateUserDetails(details: UserDetailsDto) {
        const url = '/users/details';
        return axiosClient.put(url, details);
    },
};

export default usersApi;
