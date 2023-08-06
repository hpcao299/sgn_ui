import meta from '@/constants/meta';
import '@/app/globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: 'normal',
    subsets: ['vietnamese'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: meta.title.home,
    description: meta.desc.home,
    keywords: ['saigonnguyen', 'đồ gia dụng', 'Sài Gòn Nguyễn'],
    alternates: { canonical: process.env.APP_URL },
    openGraph: {
        title: meta.title.home,
        description: meta.desc.home,
        type: 'website',
        locale: 'vi_VN',
        url: process.env.APP_URL,
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
