'use client';

import ChevronLeft from '@/assets/icons/chevronLeft.svg';
import { ProductItem } from '@/components';
import { Product } from '@/types';
import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './SliderProductsList.module.css';

const cx = classNames.bind(styles);

interface SliderProductsListProps {
    data?: Product[];
}

const SliderProductsList: React.FC<SliderProductsListProps> = ({ data }) => {
    const isDesktop = useMediaQuery({ query: '(min-width: 1024px)' });

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: isDesktop ? 5 : 4,
        slidesToScroll: isDesktop ? 3 : 2,
        autoplay: true,
        autoplayInterval: 6000,
        wrapAround: true,
    };

    return (
        <div className={cx('container', 'products-carousel')}>
            <Carousel
                {...settings}
                renderCenterLeftControls={({ previousSlide, previousDisabled }) => (
                    <button
                        className={cx('control-btn', 'prev-btn', previousDisabled && 'disabled')}
                        onClick={previousSlide}
                    >
                        <ChevronLeft />
                    </button>
                )}
                renderCenterRightControls={({ nextSlide, nextDisabled }) => (
                    <button
                        className={cx('control-btn', 'next-btn', nextDisabled && 'disabled')}
                        onClick={nextSlide}
                    >
                        <ChevronLeft style={{ transform: 'rotate(180deg)' }} />
                    </button>
                )}
            >
                {data?.map(item => <ProductItem data={item} key={item.id} />)}
            </Carousel>
        </div>
    );
};

export default SliderProductsList;
