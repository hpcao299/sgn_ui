import Sidebar from '@/components/layouts/Sidebar';
import React, { Suspense } from 'react';
import Banner from './components/Banner';
import { SliderProductsList } from '@/components/elements';
import classNames from 'classnames/bind';
import styles from './Home.module.css';
const cx = classNames.bind(styles);

const News = React.lazy(() => import('./components/News'));

const HomePage: React.FC = () => {
    return (
        <>
            <div className="container">
                <div className="flex" style={{ paddingBottom: '20px' }}>
                    <Sidebar />
                    <Banner />
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('section-title')}>sản phẩm mới</h4>
                    <SliderProductsList />
                </div>
                <div className={cx('section')}>
                    <h4 className={cx('section-title')}>sản phẩm bán chạy</h4>
                    <SliderProductsList />
                </div>
            </div>

            <Suspense fallback={<p>Loading news...</p>}>
                <News />
            </Suspense>
        </>
    );
};

export default HomePage;
