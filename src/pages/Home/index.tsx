import productsApi from '@/api/productsApi';
import { RenderOnView, SliderProductsList } from '@/components/elements';
import Sidebar from '@/components/layouts/Sidebar';
import classNames from 'classnames/bind';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import MediaQuery from 'react-responsive';
import styles from './Home.module.css';
import Banner from './components/Banner';
import ProductsList from './components/ProductsList/ProductsList';
const cx = classNames.bind(styles);

const News = React.lazy(() => import('./components/News'));

const HomePage: React.FC = () => {
    const { data: newArrivals, isLoading: loadingNewArrivals } = productsApi.useNewArrivals();
    const { data: bestSellings, isLoading: loadingBestSelling } = productsApi.useBestSelling();

    return (
        <>
            <Helmet>
                <title>{import.meta.env.VITE_APP_SITE_TITLE}</title>
            </Helmet>

            <div className="container">
                <div className="flex" style={{ paddingBottom: '20px' }}>
                    <Sidebar />
                    <Banner />
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('section-title')}>sản phẩm mới</h4>
                    <MediaQuery minWidth={740}>
                        <SliderProductsList
                            data={newArrivals?.data}
                            isLoading={loadingNewArrivals}
                        />
                    </MediaQuery>
                    <MediaQuery maxWidth={739}>
                        <ProductsList data={newArrivals?.data} isLoading={loadingNewArrivals} />
                    </MediaQuery>
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('section-title')}>sản phẩm bán chạy</h4>
                    <MediaQuery minWidth={740}>
                        <SliderProductsList
                            data={bestSellings?.data}
                            isLoading={loadingBestSelling}
                        />
                    </MediaQuery>
                    <MediaQuery maxWidth={739}>
                        <ProductsList data={bestSellings?.data} isLoading={loadingBestSelling} />
                    </MediaQuery>
                </div>
            </div>

            <RenderOnView>
                <Suspense fallback={<p>Loading news...</p>}>
                    <News />
                </Suspense>
            </RenderOnView>
        </>
    );
};

export default HomePage;
