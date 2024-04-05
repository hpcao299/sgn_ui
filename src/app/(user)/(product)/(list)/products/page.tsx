import { Pagination } from '@/components';
import meta from '@/constants/meta';
import { getProductsList } from '@/libs/products';
import { FilterOption, filterOptions } from '@/types';
import ProductsList from '../ProductsList/ProductsList';

export interface Props {
    searchParams: { filter?: FilterOption; page?: string };
}

const ProductsPage = async ({ searchParams }: Props) => {
    const currentPage = searchParams.page ? Number(searchParams.page) : 1;
    const filterOption = searchParams.filter
        ? filterOptions.includes(searchParams.filter)
            ? searchParams.filter
            : 'new-arrivals'
        : 'new-arrivals';

    const { data, total_pages, current_page } = await getProductsList(currentPage, filterOption);

    return (
        <>
            <h1 style={{ position: 'fixed', top: '-100vh' }}>{meta.title.products}</h1>
            <ProductsList data={data} />
            <Pagination total_pages={total_pages} current_page={current_page} />
        </>
    );
};

export default ProductsPage;
