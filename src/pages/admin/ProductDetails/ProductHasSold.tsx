import { Loader } from '@/components/elements';
import classNames from 'classnames/bind';
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import statisticApi from '../api/statisticsApi';
import styles from './ProductDetails.module.css';

const cx = classNames.bind(styles);

const ProductHasSold: React.FC = () => {
    const params = useParams();
    const { data, isLoading } = statisticApi.useProductStatisticsById(Number(params.id));
    const details = data?.data;
    const percentageChange = useMemo(() => {
        if (details) {
            const { has_sold, previous_has_sold } = details;
            const change = has_sold - previous_has_sold;
            const percentageChange = previous_has_sold === 0 ? 100 : 100 / previous_has_sold;

            return Number((change * percentageChange).toFixed(1));
        }
    }, [details]);

    return (
        <div className={cx('product-has-sold')}>
            Đã bán:{' '}
            {isLoading ? (
                <div style={{ marginLeft: '16px' }}>
                    <Loader size="small" />
                </div>
            ) : (
                <>
                    {details.has_sold}{' '}
                    <span
                        className={cx(
                            'product-growth',
                            percentageChange && percentageChange > 0 ? 'increase' : 'decrease',
                        )}
                    >
                        {percentageChange && percentageChange > 0 ? '+' : '-'}
                        {percentageChange}%{' '}
                        <span
                            style={{
                                color: 'var(--text-color)',
                                fontSize: '16px',
                                fontWeight: 400,
                            }}
                        >
                            (Tháng trước: {details.previous_has_sold})
                        </span>
                    </span>
                </>
            )}
        </div>
    );
};

export default ProductHasSold;
