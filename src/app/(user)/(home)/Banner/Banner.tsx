import smallBanner1 from '/public/banner_1.jpeg';
import smallBanner2 from '/public/banner_2.jpeg';
import smallBanner3 from '/public/banner_3.jpeg';
import smallBanner4 from '/public/banner_4.jpeg';
import bigBanner1 from '/public/big_banner_1.jpeg';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './Banner.module.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';

const CarouselBanner = dynamic(() => import('./CarouselBanner'), { ssr: false });

const cx = classNames.bind(styles);

const Banner: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('big-img-wrapper', 'banners-carousel')}>
                <Image
                    src={bigBanner1}
                    alt="Big banner"
                    width={512}
                    height={344}
                    priority
                    className={cx('placeholder-img')}
                    placeholder="blur"
                />
                <CarouselBanner />
            </div>
            <div className={cx('small-img-wrapper-1')}>
                <Image
                    src={smallBanner1}
                    alt="Banner"
                    width={171}
                    height={175}
                    priority
                    placeholder="blur"
                />
            </div>
            <div className={cx('small-img-wrapper-2')}>
                <Image
                    src={smallBanner2}
                    alt="Banner"
                    width={171}
                    height={175}
                    priority
                    placeholder="blur"
                />
            </div>
            <div className={cx('small-img-wrapper-3')}>
                <Image
                    src={smallBanner3}
                    alt="Banner"
                    width={171}
                    height={175}
                    priority
                    placeholder="blur"
                />
            </div>
            <div className={cx('small-img-wrapper-4')}>
                <Image
                    src={smallBanner4}
                    alt="Banner"
                    width={171}
                    height={175}
                    priority
                    placeholder="blur"
                />
            </div>
        </div>
    );
};

export default Banner;
