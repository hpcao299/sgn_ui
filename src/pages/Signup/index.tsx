import { ReactComponent as LockIcon } from '@/assets/icons/lock.svg';
import { ReactComponent as MailIcon } from '@/assets/icons/mail.svg';
import { InputField } from '@/components/custom-fields';
import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Signup.module.css';

const cx = classNames.bind(styles);

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { to: config.routes.signup, title: 'Đăng ký' },
];

const SignupPage: React.FC = () => {
    return (
        <>
            <PageDetails title="Đăng ký tài khoản" paths={paths} />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h2>Đăng ký tài khoản</h2>
                    <div className={cx('form')}>
                        <InputField
                            name="email"
                            type="text"
                            placeholder="Email của bạn"
                            Icon={MailIcon}
                        />
                        <InputField
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                            Icon={LockIcon}
                        />
                        <InputField
                            name="confirmPassword"
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            Icon={LockIcon}
                        />
                        <Button type="submit" color="primary" className={cx('signup-btn')}>
                            Đăng Ký
                        </Button>
                    </div>
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
