import { Loader } from '@/components';
import { getBestSellings, getNewArrivals } from '@/libs/products';
import classNames from 'classnames/bind';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

const cx = classNames.bind(styles);

const ProductsList = dynamic(() => import('./ProductsList'), {
    ssr: false,
    loading: () => <Loader className={cx('loader')} />,
});

const HomePage: NextPage = async () => {
    const newArrivalsRes = getNewArrivals();
    const bestSellingsRes = getBestSellings();

    const [newArrivals, bestSellings] = await Promise.all([newArrivalsRes, bestSellingsRes]);

    return (
        <>
            <div className={cx('section')}>
                <h3 className={cx('section-title')}>sản phẩm mới</h3>
                <ProductsList data={newArrivals?.data} />
            </div>
            <div className={cx('section')}>
                <h3 className={cx('section-title')}>sản phẩm bán chạy</h3>
                <ProductsList data={bestSellings?.data} />
            </div>
        </>
    );
};

export default HomePage;
