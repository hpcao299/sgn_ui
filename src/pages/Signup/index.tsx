/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactComponent as LockIcon } from '@/assets/icons/lock.svg';
import { ReactComponent as MailIcon } from '@/assets/icons/mail.svg';
import { InputField } from '@/components/custom-fields';
import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useAuthContext } from '@/contexts/AuthContext';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Signup.module.css';
import { useNotifyContext } from '@/contexts/NotifyContext';

const cx = classNames.bind(styles);

interface ISignUpForm {
    email: string;
    password: string;
    confirmPassword: string;
}

const defaultValues: ISignUpForm = {
    email: '',
    password: '',
    confirmPassword: '',
};

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.signup, title: 'Đăng ký' },
];

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const { addNewNotification } = useNotifyContext();
    const { signUp, currentUser } = useAuthContext();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ISignUpForm>({ defaultValues });

    useEffect(() => {
        if (currentUser) navigate(config.routes.home);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navigate]);

    const onSubmit: SubmitHandler<ISignUpForm> = async data => {
        const { email, password } = data;
        setIsLoading(true);

        try {
            await signUp(email, password);
            addNewNotification(constants.notifications.SIGNUP_SUCCESS);
            navigate(config.routes.profileUpdate);
        } catch (error: any) {
            if (error.code === 'auth/email-already-in-use') {
                setError('Email đã được dùng bởi tài khoản khác.');
            } else {
                setError(error.message);
            }
        }

        setIsLoading(false);
    };

    return (
        <>
            <PageDetails title="Đăng ký tài khoản" paths={paths} />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h2>Đăng ký tài khoản</h2>
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
                                    placeholder="Email của bạn"
                                    Icon={MailIcon}
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
                        <Controller
                            name="confirmPassword"
                            control={control}
                            rules={{
                                validate: value => {
                                    if (watch('password') !== value) {
                                        return 'Mật khẩu được nhập lại không trùng khớp.';
                                    }
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    type="password"
                                    autoComplete="off"
                                    placeholder="Nhập lại mật khẩu"
                                    Icon={LockIcon}
                                    error={errors.confirmPassword?.message || ''}
                                    {...field}
                                />
                            )}
                        />
                        <Button
                            type="submit"
                            color="primary"
                            loading={isLoading}
                            className={cx('signup-btn')}
                        >
                            Đăng Ký
                        </Button>
                    </form>
                    <p className={cx('text-link')}>
                        <span>Đã có tài khoản?</span>{' '}
                        <Link to={config.routes.login}>Đăng nhập</Link>
                    </p>
                </div>
            </div>
            ;
        </>
    );
};

export default SignupPage;
