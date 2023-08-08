import banner from '/public/footer-banner.png';
import new1 from '/public/new_1.png';
import new2 from '/public/new_2.png';
import new3 from '/public/new_3.png';
import classNames from 'classnames/bind';
import React from 'react';
import styles from './News.module.css';
import Image from 'next/image';

const cx = classNames.bind(styles);

const news = [
    {
        date: '15-02-2022',
        title: 'Thanh nẹp giấy là gì ? Tại sao phải sử dụng thanh nẹp giấy?',
        desc: 'Thanh nẹp giấy là một công cụ dùng để nẹp cạnh, nẹp góc các sản phẩm và được sử dụng phổ biến trong các ngành đóng gói, xuất khẩu hàng hóa.',
        img: new1,
    },
    {
        date: '15-02-2022',
        title: 'TÚI BÓNG KHÍ LÀ GÌ? ĐẶC TÍNH CỦA LOẠI SẢN PHẨM NÀY LÀ GÌ?',
        desc: 'Ngày nay khi mà các sản phẩm cao cấp đang tràn ngập trên thị trường thì việc bảo vệ tốt nhất cho dòng sản phẩm này cũng là điều mà tất cả các nhà kinh...',
        img: new2,
    },
    {
        date: '15-02-2022',
        title: 'THÙNG CARTON VÀ QUY TRÌNH SẢN XUẤT THÙNG CARTON',
        desc: 'Thùng carton đang ngày càng chiếm ưu thế so với các bao bì nilong vì tính tiện dụng và mức độ thân thiện với môi trường. Không những vậy, đây còn là...',
        img: new3,
    },
];

const News: React.FC = () => {
    return (
        <div className={cx('news')}>
            <div className="container">
                <h6 className={cx('news-heading')}>TIN TỨC</h6>
                <div className={cx('news-content')}>
                    {news.map((item, index) => (
                        <div key={index} className={cx('news-item')}>
                            <Image
                                src={item.img}
                                width={358}
                                height={245}
                                alt="New Image"
                                className={cx('news-img')}
                                layout="responsive"
                            />
                            <div className={cx('news-date')}>{item.date}</div>
                            <h5 className={cx('news-title')}>{item.title}</h5>
                            <p className={cx('news-desc')}>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <Image
                src={banner}
                alt="Banner"
                width={1200}
                height={150}
                className={cx('news-banner')}
            />
        </div>
    );
};

export default News;
