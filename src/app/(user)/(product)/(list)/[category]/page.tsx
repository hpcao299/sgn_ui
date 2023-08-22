import { getProductsByCategory } from '@/libs/products';
import { Metadata } from 'next';
import React from 'react';
import ProductsList from '../ProductsList/ProductsList';
import meta from '@/constants/meta';

export interface Props {
    params: { category: string };
    searchParams: { filter?: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const res = await fetch(`http://localhost:8000/api/topics/${params.category}`);
    const { data } = await res.json();

    return {
        title: `${data.title} chất lượng cao, buôn bán sỉ lẻ`,
        description: `Danh mục sản phẩm ${data.title} chất lượng cao, buôn bán sỉ lẻ. Tìm kiếm và mua sắm ngay hôm nay!`,
        alternates: { canonical: `${process.env.APP_URL}/${data.slug}` },
        robots: {
            index: true,
            follow: true,
        },
        openGraph: {
            title: `${data.title} chất lượng cao, buôn bán sỉ lẻ`,
            description: `Danh mục sản phẩm ${data.title} chất lượng cao, buôn bán sỉ lẻ. Tìm kiếm và mua sắm ngay hôm nay!`,
            type: 'website',
            locale: 'vi_VN',
            url: `${process.env.APP_URL}/${data.slug}`,
        },
        twitter: {
            title: `${data.title} chất lượng cao, buôn bán sỉ lẻ`,
            description: `Danh mục sản phẩm ${data.title} chất lượng cao, buôn bán sỉ lẻ. Tìm kiếm và mua sắm ngay hôm nay!`,
        },
    };
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
