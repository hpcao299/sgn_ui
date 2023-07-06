import classNames from 'classnames/bind';
import React from 'react';
import styles from './Banner.module.css';
import bigBanner1 from '@/assets/images/big_banner_1.jpeg';
import smallBanner1 from '@/assets/images/banner_1.jpeg';
import smallBanner2 from '@/assets/images/banner_2.jpeg';
import smallBanner3 from '@/assets/images/banner_3.jpeg';
import smallBanner4 from '@/assets/images/banner_4.jpeg';

const cx = classNames.bind(styles);

const Banner: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('big-img-wrapper')}>
                <img src={bigBanner1} alt="Banner" />
            </div>
            <div className={cx('small-img-wrapper-1')}>
                <img src={smallBanner1} alt="Banner" />
            </div>
            <div className={cx('small-img-wrapper-2')}>
                <img src={smallBanner2} alt="Banner" />
            </div>
            <div className={cx('small-img-wrapper-3')}>
                <img src={smallBanner3} alt="Banner" />
            </div>
            <div className={cx('small-img-wrapper-4')}>
                <img src={smallBanner4} alt="Banner" />
            </div>
        </div>
    );
};

export default Banner;
