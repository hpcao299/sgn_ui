import config from '@/config';
import { ErrorResponse } from '@/types';
import Link from 'next/link';
import React from 'react';

interface ErrorHandlerProps {
    error: ErrorResponse;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error }) => {
    const { message, errorCode } = error;

    return (
        <div>
            <p style={{ textAlign: 'center', fontSize: '22px', marginTop: '14px' }}>
                {errorCode === 'auth/is-not-verified'
                    ? 'Bạn chưa cập nhật thông tin cơ bản'
                    : message}
            </p>
            {errorCode === 'auth/is-not-verified' && (
                <Link
                    style={{
                        color: 'var(--primary-color)',
                        fontSize: '18px',
                        textAlign: 'center',
                        display: 'block',
                        marginTop: '6px',
                    }}
                    href={config.routes.profileUpdate}
                >
                    Cập nhật thông tin
                </Link>
            )}
        </div>
    );
};

export default ErrorHandler;
