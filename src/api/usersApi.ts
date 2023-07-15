import { RegisterUserDto, UserDetailsDto } from '@/types';
import axiosClient from './axiosClient';

const usersApi = {
    registerUser(details: RegisterUserDto) {
        const url = '/api/users/register';
        return axiosClient.post(url, details);
    },
    getCurrentUser() {
        const url = '/api/users/current-user';
        return axiosClient.get(url);
    },
    updateUserDetails(details: UserDetailsDto) {
        const url = '/api/users/details';
        return axiosClient.put(url, details);
    },
};

export default usersApi;
