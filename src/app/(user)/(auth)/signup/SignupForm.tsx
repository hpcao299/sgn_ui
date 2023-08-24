'use client';

import LockIcon from '@/assets/icons/lock.svg';
import MailIcon from '@/assets/icons/mail.svg';
import { Button } from '@/components';
import { InputField } from '@/components/custom-fields';
import config from '@/config';
import constants from '@/constants';
import { useAuthStore, useNotifyStore } from '@/stores';
import classNames from 'classnames/bind';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './Signup.module.css';

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

const SignupForm: React.FC = () => {
    const addNewNotification = useNotifyStore(state => state.addNewNotification);
    const signUp = useAuthStore(state => state.signUp);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const {
        control,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<ISignUpForm>({ defaultValues });

    const onSubmit: SubmitHandler<ISignUpForm> = async data => {
        const { email, password } = data;
        console.log({ email, password });
        setIsLoading(true);

        try {
            await signUp(email, password);
            addNewNotification(constants.notifications.SIGNUP_SUCCESS);
            router.push(config.routes.profileUpdate);
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
        <div className={cx('wrapper')}>
            <h1>Đăng ký tài khoản</h1>
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
                <span>Đã có tài khoản?</span> <Link href={config.routes.login}>Đăng nhập</Link>
            </p>
        </div>
    );
};

export default SignupForm;
