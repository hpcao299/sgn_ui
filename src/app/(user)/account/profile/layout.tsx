import config from '@/config';
import meta from '@/constants/meta';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: meta.title.profile,
    description: meta.desc.profile,
    alternates: { canonical: `${process.env.APP_URL}${config.routes.profile}` },
    openGraph: {
        title: meta.title.profile,
        description: meta.desc.profile,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.APP_URL}${config.routes.profile}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const ProfilePageLayout = ({ children }: { children: React.ReactNode }) => {
    return children;
};

export default ProfilePageLayout;
