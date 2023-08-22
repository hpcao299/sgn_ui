import { Category, ResponseData } from '@/types';

export async function getCategories(): Promise<ResponseData<Category[]>> {
    const res = await fetch(`http://localhost:8000/api/topics/for-you`, {
        cache: 'force-cache',
    });

    const data = await res.json();

    return data;
}

export async function getCategory(category: string): Promise<ResponseData<Category>> {
    const res = await fetch(`http://localhost:8000/api/topics/${category}`, {
        cache: 'force-cache',
    });

    const data = await res.json();

    return data;
}
