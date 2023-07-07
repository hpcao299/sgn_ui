import { ReactComponent as MailIcon } from '@/assets/icons/mail.svg';
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg';
import { ReactComponent as WwwIcon } from '@/assets/icons/www.svg';
import config from '@/config';
import classNames from 'classnames/bind';
import React, { Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Footer.module.css';

const Feed = React.lazy(() => import('./Feed'));

const cx = classNames.bind(styles);

const contactsList = [
    {
        Icon: PhoneIcon,
        text: '0901338974 (Zalo)',
    },
    {
        Icon: MailIcon,
        text: 'saigonnguyenco@gmail.com',
    },
    {
        Icon: WwwIcon,
        text: 'http://thungcartonsgn.vn/',
    },
];

const Footer: React.FC = () => {
    const location = useLocation();

    return (
        <footer
            className={cx(
                'footer',
                location.pathname === config.routes.home && 'footer-contain-banner',
            )}
        >
            <div className={cx('container', 'footer-content')}>
                <div className="">
                    <h1>CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN</h1>
                    <p>
                        Chuyên cung cấp và sản xuất bao bì giấy carton, với kinh nghiệm hơn 5 năm
                        làm việc trong nghành sản xuất bao bì.
                    </p>
                    <p>
                        Ngoài hơn 100 size thùng được sản xuất tồn kho sẳn để giao cho quý khách
                        trong 24h. Chúng tôi còn nhận sản xuất thiết kế và in ấn theo yêu cầu của
                        khách hàng và giao hàng từ 4-5 ngày làm việc.
                    </p>
                </div>
                <div className="">
                    <h4>THÔNG TIN LIÊN HỆ</h4>
                    <p>Xưởng SX 1: 185/3 Đường An Phú Đông 10, P. An Phú Đông, Q.12, HCM</p>
                    <p>Xưởng SX 2: Quyết Tiến 2, Vân Côn, Hoài Đức, Hà Nội</p>

                    <div className={cx('contact-info-wrapper')}>
                        {contactsList.map((contact, index) => {
                            const Icon = contact.Icon;

                            return (
                                <p key={index} className={cx('contact-info')}>
                                    <Icon />
                                    <span>{contact.text}</span>
                                </p>
                            );
                        })}
                    </div>
                </div>
                <div>
                    <Suspense fallback={<p>Loading facebook page...</p>}>
                        <Feed />
                    </Suspense>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
