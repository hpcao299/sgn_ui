import { ReactComponent as LockIcon } from '@/assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { InputField } from '@/components/custom-fields';
import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';
import { useForm, SubmitHandler, Controller } from 'react-hook-form';
import constants from '@/constants';

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
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>({ defaultValues });

    const onSubmit: SubmitHandler<ILoginForm> = data => {
        console.log('data: ', data);
    };

    return (
        <>
            <PageDetails title="Đăng nhập" paths={paths} />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h2>Đăng nhập</h2>
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
                        <Button type="submit" color="primary">
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
