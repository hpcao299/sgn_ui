import { Loader } from '@/components/elements';
import { useParams } from 'react-router-dom';
import productApi from '../api/productApi';
import Form from './Form';

const ProductDetailsForm: React.FC = () => {
    const params = useParams();

    if (params.id) {
        const { data, isLoading } = productApi.useProductDetails(Number(params.id));
        const details = data?.data;

        return isLoading ? (
            <div className="flex-center">
                <Loader />
            </div>
        ) : (
            <Form
                productDetails={{
                    title: details?.title,
                    price: details?.price,
                    short_desc: details?.short_desc,
                    full_desc: details?.full_desc,
                    image_url: details?.image_url,
                    topic_id: details?.topic_id,
                }}
                productId={details?.id}
            />
        );
    }

    return <Form />;
};

export default ProductDetailsForm;
