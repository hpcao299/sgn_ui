import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: 'normal',
    subsets: ['vietnamese'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN',
    description:
        'Chào mừng bạn đến với Công Ty TNHH Đầu Tư Thương Mại Sài Gòn Nguyễn. Chúng tôi cung cấp các sản phẩm gia dụng với chất lượng và giá cả hấp dẫn. Khám phá ngay!',
    openGraph: {
        title: 'CÔNG TY TNHH ĐẦU TƯ THƯƠNG MẠI SÀI GÒN NGUYỄN',
        description:
            'Chào mừng bạn đến với Công Ty TNHH Đầu Tư Thương Mại Sài Gòn Nguyễn. Chúng tôi cung cấp các sản phẩm gia dụng với chất lượng và giá cả hấp dẫn. Khám phá ngay!',
        type: 'website',
        locale: 'vi_VN',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className={roboto.className}>
                <h1>Chào ae</h1>
                {children}
            </body>
        </html>
    );
}
