import config from '@/config';
import { ErrorResponse } from '@/types';
import React from 'react';
import { Link } from 'react-router-dom';

interface ErrorHandlerProps {
    error: ErrorResponse;
}

const ErrorHandler: React.FC<ErrorHandlerProps> = ({ error }) => {
    const { code, message, errorCode } = error;

    console.log({ code, message, errorCode });

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
                    to={config.routes.profileUpdate}
                >
                    Cập nhật thông tin
                </Link>
            )}
        </div>
    );
};

export default ErrorHandler;
