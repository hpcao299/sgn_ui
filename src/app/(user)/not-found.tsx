import { Button } from '@/components';
import config from '@/config';
import Link from 'next/link';
import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                textAlign: 'center',
                position: 'relative',
                padding: '0 8px',
            }}
        >
            <div style={{ paddingBottom: '20px' }}>
                <h1
                    style={{
                        fontWeight: 'bold',
                        fontSize: '44px',
                        margin: '.67em 0',
                        lineHeight: '1.6',
                    }}
                >
                    Không tìm thấy nội dung 😓
                </h1>
                <p style={{ fontSize: '16px', marginBottom: '12px', lineHeight: '1.6' }}>
                    URL của nội dung này đã <strong>bị thay đổi</strong> hoặc{' '}
                    <strong>không còn tồn tại</strong>.
                </p>
                <p style={{ fontSize: '16px', marginBottom: '12px', lineHeight: '1.6' }}>
                    Nếu bạn <strong>đang lưu URL này</strong>, hãy thử{' '}
                    <strong>truy cập lại từ trang chủ</strong> thay vì dùng URL đã lưu.
                </p>
                <div style={{ marginTop: '26px' }}>
                    <Link href={config.routes.home} style={{ display: 'inline-block' }}>
                        <Button>Quy cập trang chủ</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFoundPage;
