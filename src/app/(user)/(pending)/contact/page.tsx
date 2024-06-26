import { PageDetails } from '@/components';
import config from '@/config';
import meta from '@/constants/meta';
import classNames from 'classnames/bind';
import { Metadata, NextPage } from 'next';
import Link from 'next/link';
import styles from './Contact.module.css';

const cx = classNames.bind(styles);

export const metadata: Metadata = {
    title: meta.title.contact,
    description: meta.desc.contact,
    keywords: ['saigonnguyen', 'đồ gia dụng', 'Sài Gòn Nguyễn'],
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.contact}` },
    openGraph: {
        title: meta.title.contact,
        description: meta.desc.contact,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.contact}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const ContactPage: NextPage = () => {
    return (
        <>
            <PageDetails title="Liên hệ" />
            <div className="container">
                <div className={cx('content')}>
                    <div className={cx('heading')}>Thông tin liên hệ</div>
                    <h1 style={{ position: 'absolute', top: '-1000vh' }}>
                        Thông tin liên hệ Sài Gòn Nguyễn
                    </h1>
                    <ul className={cx('content-list')}>
                        <li>Địa chỉ: 185/3 Đường An Phú Đông 10, P. An Phú Đông, Q.12, HCM</li>
                        <li>
                            Điện thoại:{' '}
                            <a
                                href="tel:0901338974"
                                style={{
                                    color: 'var(--primary-color)',
                                    textDecoration: 'none',
                                }}
                            >
                                090 1338974
                            </a>
                        </li>
                        <li>
                            Zalo:{' '}
                            <a
                                href="tel:0901338974"
                                style={{
                                    color: 'var(--primary-color)',
                                    textDecoration: 'none',
                                }}
                            >
                                090 1338974
                            </a>
                        </li>
                        <li>
                            Email:{' '}
                            <a
                                href="mailto:saigonnguyenco@gmail.com"
                                style={{
                                    color: 'var(--primary-color)',
                                    textDecoration: 'none',
                                }}
                            >
                                saigonnguyenco@gmail.com
                            </a>
                        </li>
                        <li>
                            Website:{' '}
                            <Link
                                href="/"
                                style={{
                                    color: 'var(--primary-color)',
                                    textDecoration: 'none',
                                }}
                            >
                                https://saigonnguyen.online/
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
