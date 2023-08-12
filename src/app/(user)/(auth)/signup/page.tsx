import { PageDetails } from '@/components';
import config from '@/config';
import classNames from 'classnames/bind';
import { Metadata, NextPage } from 'next';
import styles from './Signup.module.css';
import meta from '@/constants/meta';
import SignupForm from './SignupForm';

const cx = classNames.bind(styles);

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.signup, title: 'Đăng ký' },
];

export const metadata: Metadata = {
    title: meta.title.signup,
    description: meta.desc.signup,
    alternates: { canonical: `${process.env.APP_URL}${config.routes.signup}` },
    openGraph: {
        title: meta.title.signup,
        description: meta.desc.signup,
        url: `${process.env.APP_URL}${config.routes.signup}`,
        type: 'website',
        locale: 'vi_VN',
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const SignupPage: NextPage = () => {
    return (
        <>
            <PageDetails title="Đăng ký" paths={paths} />
            <div className={cx('container')}>
                <SignupForm />
            </div>
        </>
    );
};

export default SignupPage;
