import meta from '@/constants/meta';
import { getNewArrivals } from '@/libs/products';
import { NextPage } from 'next';
import ProductsList from '../ProductsList/ProductsList';

const ProductsPage: NextPage = async () => {
    const { data } = await getNewArrivals();

    return (
        <>
            <h1 style={{ position: 'fixed', top: '-100vh' }}>{meta.title.products}</h1>
            <ProductsList data={data} />
        </>
    );
};

export default ProductsPage;
