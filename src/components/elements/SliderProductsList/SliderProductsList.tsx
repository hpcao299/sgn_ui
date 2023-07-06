import classNames from 'classnames/bind';
import React from 'react';
import styles from './SliderProductsList.module.css';
import './carousel.css';
import Carousel from 'nuka-carousel';
import { ProductItem } from '@/components/elements';
import { ReactComponent as ChevronLeft } from '@/assets/icons/chevronLeft.svg';
import { ReactComponent as ChevronRight } from '@/assets/icons/chevronRight.svg';

const cx = classNames.bind(styles);

// interface SliderProductsListProps {}

const SliderProductsList: React.FC = () => {
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
        <div className={cx('container')}>
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
                {/* className={cx('item')} */}
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
                <div>
                    <ProductItem />
                </div>
            </Carousel>
        </div>
    );
};

export default SliderProductsList;
