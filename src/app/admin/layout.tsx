import '@/app/globals.css';
import meta from '@/constants/meta';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
    weight: ['300', '400', '500', '700', '900'],
    style: 'normal',
    subsets: ['vietnamese'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: meta.title.admin,
    description: meta.desc.admin,
    robots: {
        index: false,
        follow: false,
    },
    openGraph: {
        title: meta.title.admin,
        description: meta.desc.admin,
        type: 'website',
        locale: 'vi_VN',
        url: `${process.env.NEXT_PUBLIC_APP_URL}/admin`,
    },
    alternates: { canonical: `${process.env.NEXT_PUBLIC_APP_URL}/admin` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="vi">
            <body className={roboto.className}>
                <h1>Trang admin</h1>
                {children}
            </body>
        </html>
    );
}
