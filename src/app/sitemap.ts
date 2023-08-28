import config from '@/config';
import { getCategories } from '@/libs/categories';
import { getProductsSlugList } from '@/libs/products';

export default async function sitemap() {
    let allPages = Object.values(config.routes);
    const allCategoriesPromise = getCategories();
    const allProductsSlugPromise = getProductsSlugList();

    const [allCategories, allProductsSlug] = await Promise.all([
        allCategoriesPromise,
        allProductsSlugPromise,
    ]);

    const categories = allCategories.data.map(category => ({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/${category.slug}`,
        lastModified: category.created_at,
    }));

    allPages = allPages.filter(page => !page.includes(':'));

    const pages = allPages.map(page => ({
        url: `${process.env.NEXT_PUBLIC_APP_URL}${page}`,
        lastModified: new Date(),
    }));

    const products = allProductsSlug.data.map(product => ({
        url: `${process.env.NEXT_PUBLIC_APP_URL}/products/${product.slug}`,
        lastModified: new Date(),
    }));

    return [...categories, ...pages, ...products];
}
