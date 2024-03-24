import { PageDetails } from '@/components';
import config from '@/config';
import meta from '@/constants/meta';
import { Metadata, NextPage } from 'next';
import News from '../../(home)/News';

export const metadata: Metadata = {
    title: meta.title.new,
    description: meta.desc.new,
    keywords: ['saigonnguyen', 'đồ gia dụng', 'Sài Gòn Nguyễn'],
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.new}` },
    openGraph: {
        title: meta.title.new,
        description: meta.desc.new,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.new}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const NewsPage: NextPage = () => {
    return (
        <>
            <h1 style={{ position: 'absolute', top: '-1000vh' }}>
                Tin tức | Trang website Sài Gòn Nguyễn
            </h1>
            <PageDetails title="Tin tức" />
            <News />
        </>
    );
};

export default NewsPage;
