import { Product, ResponseData } from '@/types';

const SECONDS_IN_AN_HOUR = 3600;

export async function getNewArrivals(): Promise<ResponseData<Product[]>> {
    const res = await fetch('http://localhost:8000/api/products/new-arrivals', {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}

export async function getBestSellings(): Promise<ResponseData<Product[]>> {
    const res = await fetch('http://localhost:8000/api/products/best-selling', {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}

export async function getProductsByCategory(
    category: string,
    filter?: string,
): Promise<ResponseData<Product[]>> {
    const filterQuery = filter ? `&filter=${filter}` : '';

    const res = await fetch(
        `http://localhost:8000/api/products/list?category=${category}${filterQuery}`,
        {
            next: { revalidate: SECONDS_IN_AN_HOUR },
        },
    );

    const data = await res.json();

    return data;
}

export async function getProductDetails(slug: string) {
    const res = await fetch(`http://localhost:8000/api/products/details/${slug}`, {
        next: { revalidate: SECONDS_IN_AN_HOUR },
    });

    const data = await res.json();

    return data;
}
