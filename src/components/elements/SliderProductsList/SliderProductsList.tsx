import { ReactComponent as ChevronLeft } from '@/assets/icons/chevronLeft.svg';
import { ReactComponent as ChevronRight } from '@/assets/icons/chevronRight.svg';
import { ProductItem } from '@/components/elements';
import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';
import React from 'react';
import styles from './SliderProductsList.module.css';
import { Product } from '@/types';

const cx = classNames.bind(styles);

interface SliderProductsListProps {
    data?: Product[];
}

const SliderProductsList: React.FC<SliderProductsListProps> = ({ data }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 3,
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
                        <ChevronRight />
                    </button>
                )}
            >
                {data?.map(item => (
                    <div key={item.id}>
                        <ProductItem data={item} />
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default SliderProductsList;
