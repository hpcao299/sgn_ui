import { Sidebar } from '@/layouts';
import React from 'react';
import styles from './ProductsLayout.module.css';
import classNames from 'classnames/bind';
import { PageDetails } from '@/components';
import FilterSelect from './FilterSelect';

const cx = classNames.bind(styles);

const ProductsPageLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <PageDetails title="San Pahm" />
            <div className={cx('content')}>
                <div className="container flex">
                    <div>
                        <Sidebar className={cx('sidebar')} />
                    </div>
                    <div className={cx('products-container')}>
                        <FilterSelect />
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPageLayout;
