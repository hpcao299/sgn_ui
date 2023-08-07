'use client';

import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import WwwIcon from '@/assets/icons/www.svg';
import config from '@/config';
import classNames from 'classnames/bind';
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';
import React from 'react';
import styles from './Footer.module.css';

const Feed = dynamic(() => import('./Feed'), { loading: () => <p>Loading facebook page...</p> });

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
    const pathname = usePathname();

    return (
        <footer
            className={cx('footer', pathname === config.routes.home && 'footer-contain-banner')}
        >
            <div className={cx('container', 'footer-content')}>
                <div className="">
                    <h1 className={cx('heading')}>CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN</h1>
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
                    <p className={cx('heading')}>THÔNG TIN LIÊN HỆ</p>
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
                    <Feed />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
