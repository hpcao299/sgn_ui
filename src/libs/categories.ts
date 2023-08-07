import { Category, ResponseData } from '@/types';

export async function getCategories(): Promise<ResponseData<Category[]>> {
    const res = await fetch(`http://localhost:8000/api/topics/for-you`, {
        cache: 'force-cache',
    });

    const data = await res.json();

    return data;
}
