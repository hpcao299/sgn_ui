import meta from '@/constants/meta';
import { getCategories } from '@/libs/categories';
import { getProductsByCategory } from '@/libs/products';
import { Metadata } from 'next';
import ProductsList from '../ProductsList/ProductsList';
import { notFound } from 'next/navigation';

export interface Props {
    params: { category: string };
    searchParams: { filter?: string };
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
    const { data } = await getProductsByCategory(params.category, searchParams.filter);

    return (
        <>
            <h1 style={{ position: 'fixed', top: '-100vh' }}>{meta.title.products}</h1>
            <ProductsList data={data} />
        </>
    );
};

export default ProductsCategoryPage;
