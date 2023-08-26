import { RegisterUserDto } from '@/types';

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
};

export default usersApi;
