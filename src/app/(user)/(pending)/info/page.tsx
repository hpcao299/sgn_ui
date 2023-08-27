import { PageDetails } from '@/components';
import config from '@/config';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react';

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.info, title: 'Thông tin' },
];

const InfoPage: NextPage = () => {
    return (
        <>
            <PageDetails title="Thông tin" paths={paths} />
            <div style={{ marginTop: '24px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '24px', marginBottom: '8px' }}>Trang đang được cập nhật</h1>
                <p>
                    <Link
                        style={{ color: 'var(--primary-color)', fontSize: '18px' }}
                        href={config.routes.home}
                    >
                        Quay về trang chủ
                    </Link>
                </p>
            </div>
        </>
    );
};

export default InfoPage;
