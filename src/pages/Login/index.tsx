import { ReactComponent as LockIcon } from '@/assets/icons/lock.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { InputField } from '@/components/custom-fields';
import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

const cx = classNames.bind(styles);

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.login, title: 'Đăng nhập' },
];

const LoginPage: React.FC = () => {
    return (
        <>
            <PageDetails title="Đăng nhập" paths={paths} />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h2>Đăng nhập</h2>
                    <div className={cx('form')}>
                        <InputField
                            name="username"
                            type="text"
                            placeholder="Tài khoản hoặc email"
                            Icon={UserIcon}
                        />
                        <InputField
                            type="password"
                            name="password"
                            autocomplete="off"
                            placeholder="Mật khẩu"
                            Icon={LockIcon}
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
                    </div>
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
