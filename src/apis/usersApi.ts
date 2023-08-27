import { RegisterUserDto, UserDetailsDto } from '@/types';
import axiosClient from './axiosClient';

const usersApi = {
    async registerUser(details: RegisterUserDto) {
        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/users/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(details),
        });

        return response.json();
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
