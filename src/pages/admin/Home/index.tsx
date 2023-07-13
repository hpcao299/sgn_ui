import React from 'react';
import GeneralStatistic from './GeneralStatistics';
import OrdersStatistics from './OrdersStatistics';
import ProductsStatistics from './ProductsStatistics';

const HomePage: React.FC = () => {
    return (
        <div>
            <GeneralStatistic />
            <OrdersStatistics />
            <ProductsStatistics />
        </div>
    );
};

export default HomePage;
