import useSWRImmutable from 'swr/immutable';

const categoriesApi = {
    useCategories() {
        return useSWRImmutable('/topics/for-you');
    },
};

export default categoriesApi;
