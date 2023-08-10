import { Loader } from '@/components';
import { getBestSellings, getNewArrivals } from '@/libs/products';
import classNames from 'classnames/bind';
import { Metadata, NextPage } from 'next';
import dynamic from 'next/dynamic';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

export const metadata: Metadata = {
    robots: {
        index: true,
        follow: true,
    },
};

const ProductsList = dynamic(() => import('./ProductsList'), {
    loading: () => <Loader className={cx('loader')} />,
});

const HomePage: NextPage = async () => {
    const newArrivalsRes = getNewArrivals();
    const bestSellingsRes = getBestSellings();

    const [newArrivals, bestSellings] = await Promise.all([newArrivalsRes, bestSellingsRes]);

    return (
        <>
            <h1 style={{ position: 'fixed', top: '-100px' }}>
                CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN
            </h1>
            <div className={cx('section')}>
                <h2 className={cx('section-title')}>sản phẩm mới</h2>
                <ProductsList data={newArrivals?.data} />
            </div>
            <div className={cx('section')}>
                <h2 className={cx('section-title')}>sản phẩm bán chạy</h2>
                <ProductsList data={bestSellings?.data} />
            </div>
        </>
    );
};

export default HomePage;
