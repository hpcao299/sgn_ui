import { Metadata, NextPage } from 'next';
import React from 'react';

export interface Props {
    params: { category: string };
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

const ProductsCategoryPage: NextPage = () => {
    return <div>ProductsCategoryPage</div>;
};

export default ProductsCategoryPage;
