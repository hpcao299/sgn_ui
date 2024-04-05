import { Pagination } from '@/components';
import meta from '@/constants/meta';
import { getCategories } from '@/libs/categories';
import { getProductsByCategory } from '@/libs/products';
import { FilterOption, filterOptions } from '@/types';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductsList from '../ProductsList/ProductsList';

export interface Props {
    params: { category: string };
    searchParams: { filter?: FilterOption; page?: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/topics/${params.category}`);
    const { data } = await res.json();

    if (!data) {
        notFound();
    }

    return {
        title: `${data.title} chất lượng cao, buôn bán sỉ lẻ`,
        description: `Danh mục sản phẩm ${data.title} chất lượng cao, buôn bán sỉ lẻ. Tìm kiếm và mua sắm ngay hôm nay!`,
        alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}/${data.slug}` },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `${data.title} chất lượng cao, buôn bán sỉ lẻ`,
            description: `Danh mục sản phẩm ${data.title} chất lượng cao, buôn bán sỉ lẻ. Tìm kiếm và mua sắm ngay hôm nay!`,
            type: 'website',
            locale: 'vi_VN',
            url: `${process.env.NEXT_PUBLIC_APP_URL}/${data.slug}`,
        },
        twitter: {
            title: `${data.title} chất lượng cao, buôn bán sỉ lẻ`,
            description: `Danh mục sản phẩm ${data.title} chất lượng cao, buôn bán sỉ lẻ. Tìm kiếm và mua sắm ngay hôm nay!`,
        },
    };
};

export const generateStaticParams = async () => {
    const categories = await getCategories();

    return categories.data.map(category => ({
        category: category.slug,
    }));
};

const ProductsCategoryPage = async ({ params, searchParams }: Props) => {
    const currentPage = searchParams.page ? Number(searchParams.page) : 1;
    const filterOption = searchParams.filter
        ? filterOptions.includes(searchParams.filter)
            ? searchParams.filter
            : 'new-arrivals'
        : 'new-arrivals';

    const { data, current_page, total_pages } = await getProductsByCategory(
        currentPage,
        params.category,
        filterOption,
    );

    return (
        <>
            <h1 style={{ opacity: 0 }}>{meta.title.products}</h1>
            <ProductsList data={data} />
            <Pagination current_page={current_page} total_pages={total_pages} />
        </>
    );
};

export default ProductsCategoryPage;
