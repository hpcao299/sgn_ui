import { FilterOption, PaginateResponseData, Product, ResponseData } from '@/types';

const SECONDS_IN_AN_HOUR = 3600;

export async function getNewArrivals(): Promise<ResponseData<Product[]>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/new-arrivals`, {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}

export async function getBestSellings(): Promise<ResponseData<Product[]>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/best-selling`, {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}

// used in [category] page
export async function getProductsByCategory(
    page: number,
    category: string,
    filter?: FilterOption,
): Promise<PaginateResponseData<Product[]>> {
    const filterQuery = filter ? `&filter=${filter}` : '';

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/list?category=${category}&p=${page}${filterQuery}`,
        {
            next: { revalidate: SECONDS_IN_AN_HOUR },
        },
    );

    const data = await res.json();

    return data;
}

// used in /products page
export async function getProductsList(
    page: number,
    filter: FilterOption,
): Promise<PaginateResponseData<Product[]>> {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/list?filter=${filter}&p=${page}`,
        {
            next: { revalidate: SECONDS_IN_AN_HOUR },
        },
    );

    const data = await res.json();

    return data;
}

export async function getProductDetails(slug: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/details/${slug}`, {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}

export async function getProductsSlugList(): Promise<ResponseData<{ slug: string }[]>> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/products/list/slug`, {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}
