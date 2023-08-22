'use client'

import React, { useState,memo } from 'react';
import NextImage, { StaticImageData, ImageProps as NextImageProps } from 'next/image';
import noImageSrc from '@/assets/images/no-image.jpeg';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

interface ImageProps extends NextImageProps {
    fallbackSrc?: string | StaticImageData;
}

const Image: React.FC<ImageProps> = ({ src: srcProp, fallbackSrc = noImageSrc, ...props }) => {
    const [src, setSrc] = useState<string | StaticImport>(srcProp);

    return <NextImage src={src} onError={() => setSrc(fallbackSrc)} {...props} />;
};

export default memo(Image);
