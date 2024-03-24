import { PageDetails } from '@/components';
import config from '@/config';
import meta from '@/constants/meta';
import { Metadata, NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/sgn-logo.png';

export const metadata: Metadata = {
    title: meta.title.info,
    description: meta.desc.info,
    keywords: ['saigonnguyen', 'đồ gia dụng', 'Sài Gòn Nguyễn'],
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.info}` },
    openGraph: {
        title: meta.title.info,
        description: meta.desc.info,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.NEXT_PUBLIC_APP_URL}${config.routes.info}`,
        images: {
            url: '/opengraph-image.jpg',
            alt: 'SGN Logo',
        },
    },
};

const InfoPage: NextPage = () => {
    return (
        <>
            <PageDetails title="Thông tin Sài Gòn Nguyễn" />
            <div className="container">
                <div
                    style={{
                        marginTop: '72px',
                        paddingBottom: '88px',
                        paddingLeft: '128px',
                        paddingRight: '128px',
                    }}
                >
                    <div style={{ display: 'flex', marginBottom: '36px' }}>
                        <Image
                            src={logo}
                            alt="SGN Logo"
                            style={{
                                marginLeft: 'auto',
                                marginRight: 'auto',
                            }}
                            width={170}
                            height={60}
                        />
                    </div>
                    <h1
                        style={{
                            color: 'var(--primary-color)',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            fontSize: '16px',
                        }}
                    >
                        CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN
                    </h1>
                    <ul
                        style={{
                            marginTop: '16px',
                            paddingLeft: '16px',
                            fontSize: '16px',
                            lineHeight: '1.7',
                        }}
                    >
                        <li>
                            Chuyên cung cấp và sản xuất bao bì giấy carton, với kinh nghiệm hơn 5
                            năm làm việc trong nghành sản xuất bao bì.
                        </li>
                        <li>
                            Ngoài hơn 100 size thùng được sản xuất tồn kho sẳn để giao cho quý khách
                            trong 24h. Chúng tôi còn nhận sản xuất thiết kế và in ấn theo yêu cầu
                            của khách hàng và giao hàng từ 4-5 ngày làm việc.
                        </li>
                        <li>
                            Để đáp ứng nhu cầu ngày càng tăng chúng tôi liên tục phát triển, đầu tư
                            thêm nhiều máy móc hiện đại
                        </li>
                        <li>
                            <p>Các sản phẩm bao bì chủ đạo như:</p>
                            <ul style={{ paddingLeft: '16px' }}>
                                <li>
                                    Thùng carton SGN chuyên phục vụ cho ngành THƯƠNG MẠI ĐIỆN TỬ (
                                    luôn sẳn sàng hơn 100 size để giao ngay trong 24h )
                                </li>
                                <li>Máy sản xuất bong bóng khí ( màn xốp hơi )</li>
                                <li>
                                    Thùng carton SGN chuyên đựng hàng rau củ quả, trái cây như: sầu
                                    riêng, xoài, dưa lưới..... ( được đục lổ để đảm bảo sản phẩm bên
                                    trong được tốt nhất )
                                </li>
                                <li>
                                    Chúng tôi chuyên sản xuất túi giấy kraft có quai và không quai
                                    với chất lượng cam kết theo tiêu chuẩn xuất khẩu sang Mỹ, EU....
                                </li>
                                <li>VÀ CÒN NHIỀU SẢN PHẨM CHỦ LỰC KHÁC....</li>
                            </ul>
                        </li>
                    </ul>
                    <div style={{ marginTop: '28px' }}>
                        <h2
                            style={{
                                fontSize: '15px',
                                fontWeight: 700,
                            }}
                        >
                            Mọi chi tiết xin liên hệ
                        </h2>
                        <ul
                            style={{
                                marginTop: '16px',
                                listStyleType: 'none',
                                fontSize: '15px',
                                lineHeight: '1.7',
                            }}
                        >
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
            </div>
        </>
    );
};

export default InfoPage;
