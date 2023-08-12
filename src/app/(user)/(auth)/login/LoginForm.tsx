'use client';

import LockIcon from '@/assets/icons/lock.svg';
import UserIcon from '@/assets/icons/user.svg';
import { Button } from '@/components';
import { InputField } from '@/components/custom-fields';
import config from '@/config';
import constants from '@/constants';
// import { useAuthContext } from '@/contexts/AuthContext';
// import { useNotifyContext } from '@/contexts/NotifyContext';
import Link from 'next/link';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Login.module.css';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

interface ILoginForm {
    email: string;
    password: string;
}

const defaultValues: ILoginForm = {
    email: '',
    password: '',
};

const LoginForm: React.FC = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({ defaultValues });

    const onSubmit: SubmitHandler<ILoginForm> = async data => {
        const { email, password } = data;
        setIsLoading(true);

        try {
            // await login(email, password);
            // addNewNotification(constants.notifications.LOGIN_SUCCESS);
            // router.push(config.routes.home);
        } catch (error: any) {
            if (error.code === 'auth/user-not-found') {
                setError('Không tìm thấy tài khoản nào với email đã cho.');
            } else if (error.code === 'auth/wrong-password') {
                setError('Mật khẩu đã cho không trùng khớp.');
            } else {
                setError(error.message);
            }
        }
        setIsLoading(false);
    };

    return (
        <div className={cx('wrapper')}>
            <h1>Đăng nhập</h1>
            {error && <p className={cx('error-text')}>{error}</p>}

            <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
                <Controller
                    name="email"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập email của bạn.',
                        pattern: {
                            value: constants.regExps.email,
                            message: 'Email không hợp lệ.',
                        },
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Tài khoản hoặc email"
                            Icon={UserIcon}
                            error={errors.email?.message || ''}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập mật khẩu của bạn.',
                    }}
                    render={({ field }) => (
                        <InputField
                            type="password"
                            autoComplete="off"
                            placeholder="Mật khẩu"
                            Icon={LockIcon}
                            error={errors.password?.message || ''}
                            {...field}
                        />
                    )}
                />
                <div className={cx('form-actions')}>
                    <div className={cx('save-password')}>
                        <input id="save-password" type="checkbox" name="save-password" />
                        <label htmlFor="save-password">Lưu mật khẩu</label>
                    </div>
                    <a
                        style={{ textDecoration: 'underline', cursor: 'pointer' }}
                        // onClick={() => {
                        //     addNewNotification(
                        //         constants.notifications.FEATURE_NOT_SUPPORTED,
                        //     );
                        // }}
                    >
                        Quên mật khẩu?
                    </a>
                </div>
                <Button type="submit" color="primary" loading={isLoading}>
                    Đăng Nhập
                </Button>
            </form>
            <p className={cx('text-link')}>
                <span>Bạn chưa có tài khoản?</span>{' '}
                <Link href={config.routes.signup}>Đăng ký ngay</Link>
            </p>
        </div>
    );
};

export default LoginForm;
