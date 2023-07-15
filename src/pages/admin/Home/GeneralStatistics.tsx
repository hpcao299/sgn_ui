import { Loader } from '@/components/elements';
import { GeneralStatistic as GeneralStatisticType } from '@/types';
import { formattedPrice } from '@/utils';
import classNames from 'classnames/bind';
import React from 'react';
import statisticApi from '../api/statisticsApi';
import styles from './Home.module.css';

const cx = classNames.bind(styles);

const GeneralStatistic: React.FC = () => {
    const { data, isLoading } = statisticApi.useGeneralStatistics();
    const statistics: GeneralStatisticType = data?.data;

    return isLoading ? (
        <div className="flex-center">
            <Loader />
        </div>
    ) : (
        <div className={cx('statistics')}>
            <div className={cx('statistic-item')}>
                <h6>Doanh thu bán hàng</h6>
                <div className={cx('statistic-value')}>
                    {formattedPrice(statistics.total_revenue)}
                </div>
                <div>Tháng này</div>
            </div>
            <div className={cx('statistic-item')}>
                <h6>Tổng đơn hàng</h6>
                <div className={cx('statistic-value')}>{statistics.total_orders}</div>
                <div>Tháng này</div>
            </div>
            <div className={cx('statistic-item')}>
                <h6>Tổng sản phẩm đã bán</h6>
                <div className={cx('statistic-value')}>{statistics.total_sold_products}</div>
                <div>Tháng này</div>
            </div>
        </div>
    );
};

export default GeneralStatistic;
