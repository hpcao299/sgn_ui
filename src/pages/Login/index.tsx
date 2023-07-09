/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactComponent as LockIcon } from '@/assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { InputField } from '@/components/custom-fields';
import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useAuthContext } from '@/contexts/AuthContext';
import { useNotifyContext } from '@/contexts/NotifyContext';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.css';

const cx = classNames.bind(styles);

interface ILoginForm {
    email: string;
    password: string;
}

const defaultValues: ILoginForm = {
    email: '',
    password: '',
};

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.login, title: 'Đăng nhập' },
];

const LoginPage: React.FC = () => {
    const { addNewNotification } = useNotifyContext();
    const { login, currentUser } = useAuthContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({ defaultValues });

    useEffect(() => {
        if (currentUser) navigate(config.routes.home);
    }, [currentUser, navigate]);

    const onSubmit: SubmitHandler<ILoginForm> = async data => {
        const { email, password } = data;
        setIsLoading(true);

        try {
            await login(email, password);
            addNewNotification(constants.notifications.LOGIN_SUCCESS);
            navigate(config.routes.home);
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
        <>
            <PageDetails title="Đăng nhập" paths={paths} />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h2>Đăng nhập</h2>
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
                                pattern: {
                                    value: constants.regExps.password,
                                    message: 'Mật khẩu cần ít nhất 6 kí tự.',
                                },
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
                            <Link to={config.routes.forgotPassword}>Quên mật khẩu?</Link>
                        </div>
                        <Button type="submit" color="primary" loading={isLoading}>
                            Đăng Nhập
                        </Button>
                    </form>
                    <p className={cx('text-link')}>
                        <span>Bạn chưa có tài khoản?</span>{' '}
                        <Link to={config.routes.signup}>Đăng ký ngay</Link>
                    </p>
                </div>
            </div>
        </>
    );
};

export default LoginPage;
