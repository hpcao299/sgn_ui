'use client';

import Image from 'next/image';
import Carousel from 'nuka-carousel';
import React from 'react';
import bigBanner1 from '/public/big_banner_1.jpeg';
import bigBanner2 from '/public/big_banner_2.jpeg';

const CarouselBanner: React.FC = () => {
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayInterval: 6000,
        wrapAround: true,
    };

    return (
        <Carousel {...settings}>
            <div style={{ height: '100%' }}>
                <Image src={bigBanner1} width={512} height={360} alt="Big banner" />
            </div>
            <div style={{ height: '100%' }}>
                <Image src={bigBanner2} width={512} height={360} alt="Big banner" />
            </div>
        </Carousel>
    );
};

export default CarouselBanner;
