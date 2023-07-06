import { ReactComponent as ChevronLeft } from '@/assets/icons/chevronLeft.svg';
import { ReactComponent as ChevronRight } from '@/assets/icons/chevronRight.svg';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Pagination.module.css';

const cx = classNames.bind(styles);

const Pagination: React.FC = () => {
    return (
        <div className={cx('pagination-wrapper')}>
            <button>
                <ChevronLeft />
            </button>
            <button className={cx('active')}>1</button>
            <button>2</button>
            <button>
                <ChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
