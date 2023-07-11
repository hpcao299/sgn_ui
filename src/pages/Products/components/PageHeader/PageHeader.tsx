import categoriesApi from '@/api/categoriesApi';
import { PageDetails } from '@/components/elements';
import config from '@/config';
import { Category } from '@/types';
import React, { useMemo } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const PageHeader: React.FC = () => {
    const { data } = categoriesApi.useCategories();
    const [searchParams] = useSearchParams();
    const location = useLocation();
    const category = searchParams.get('category');

    const foundCategory: Category = useMemo(() => {
        return data?.data.find((item: Category) => item.slug === category);
    }, [category, data?.data]);

    const paths = [
        {
            title: 'Trang chủ',
            to: config.routes.home,
        },
        { title: 'Sản phẩm', to: config.routes.products },
    ];

    if (foundCategory) {
        paths.push({
            title: foundCategory.title,
            to: `${location.pathname}?${searchParams.toString()}`,
        });
    }

    return <PageDetails title={foundCategory ? foundCategory.title : 'Sản phẩm'} paths={paths} />;
};

export default PageHeader;
