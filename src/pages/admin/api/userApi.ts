import useSWR from 'swr';

const userApi = {
    usePotentialUsers() {
        return useSWR('/users/potential');
    },
};

export default userApi;
