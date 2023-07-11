import useSWR from 'swr';

const productsApi = {
    useNewArrivals() {
        return useSWR('/products/new-arrivals');
    },
    useBestSelling() {
        return useSWR('/products/best-selling');
    },
    useProductsByCategory(categorySlug: string) {
        return useSWR(`/products/list?category=${categorySlug}`);
    },
    useProductsByFilter(filter: string) {
        return useSWR(`/products/list?filter=${filter}`);
    },
    useProductsByCategoryAndFilter(categorySlug: string, filter: string) {
        return useSWR(`/products/list?category=${categorySlug}&filter=${filter}`);
    },
    useProducts(categorySlug?: string, filter?: string) {
        if (categorySlug && !filter) {
            return this.useProductsByCategory(categorySlug);
        } else if (!categorySlug && filter) {
            return this.useProductsByFilter(filter);
        } else if (categorySlug && filter) {
            return this.useProductsByCategoryAndFilter(categorySlug, filter);
        }

        return this.useNewArrivals();
    },
    useProductDetails(slug: string) {
        return useSWR(`/products/details/${slug}`);
    },
    useRelatedProducts(slug: string) {
        return useSWR(`/products/related?slug=${slug}`);
    },
};

export default productsApi;
