/* eslint-disable @typescript-eslint/no-explicit-any */
import usersApi from '@/api/usersApi';
import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { InputField } from '@/components/custom-fields';
import { Button, PageDetails } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useAuthContext } from '@/contexts/AuthContext';
import { useNotifyContext } from '@/contexts/NotifyContext';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileUpdate.module.css';
import { Helmet } from 'react-helmet';
import meta from '@/constants/meta';

const cx = classNames.bind(styles);

const paths = [
    { to: config.routes.home, title: 'Trang chủ' },
    { title: 'Thông tin cá nhân', to: config.routes.profile },
    { to: config.routes.profileUpdate, title: 'Cập nhật thông tin' },
];

interface IUpdateProfileForm {
    name: string;
    phone: string;
}

const defaultValues: IUpdateProfileForm = {
    name: '',
    phone: '',
};

const ProfileUpdatePage: React.FC = () => {
    const navigate = useNavigate();
    const { getCurrentUser } = useAuthContext();
    const { addNewNotification } = useNotifyContext();
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateProfileForm>({ defaultValues });

    const onSubmit: SubmitHandler<IUpdateProfileForm> = async data => {
        setIsLoading(true);
        try {
            await usersApi.updateUserDetails(data);
            addNewNotification(constants.notifications.UPDATE_PROFILE_SUCCESS);
            getCurrentUser();
            navigate(config.routes.profile);
        } catch (error: any) {
            setError(error.message);
            addNewNotification(constants.notifications.UPDATE_PROFILE_FAILED);
        }
        setIsLoading(false);
    };

    return (
        <>
            <Helmet>
                <title>{meta.title.profileUpdate}</title>
                <meta property="og:title" content={meta.title.profileUpdate} />
                <meta name="description" content={meta.desc.profileUpdate} />
                <meta property="og:description" content={meta.desc.profileUpdate} />
                <link rel="canonical" href={config.routes.profileUpdate} />
                <meta
                    property="og:url"
                    content={window.location.origin + config.routes.profileUpdate}
                />
                <meta name="robots" content="nofollow, noindex" />
            </Helmet>

            <PageDetails title="Cập nhật thông tin" paths={paths} />
            <div className={cx('container')}>
                <div className={cx('wrapper')}>
                    <h2>Cập nhật thông tin</h2>
                    {error && <p className={cx('error-text')}>{error}</p>}
                    <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
                        <Controller
                            name="name"
                            control={control}
                            rules={{
                                required: 'Vui lòng nhập tên của bạn.',
                                minLength: {
                                    value: 2,
                                    message: 'Tên bạn phải có ít nhất 2 ký tự.',
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    type="text"
                                    placeholder="Tên của bạn"
                                    Icon={UserIcon}
                                    error={errors.name?.message || ''}
                                    {...field}
                                />
                            )}
                        />
                        <Controller
                            name="phone"
                            control={control}
                            rules={{
                                required: 'Vui lòng nhập số điện thoại của bạn.',
                                pattern: {
                                    value: constants.regExps.phone,
                                    message: 'Số điện thoại không hợp lệ',
                                },
                            }}
                            render={({ field }) => (
                                <InputField
                                    type="text"
                                    placeholder="Số điện thoại của bạn"
                                    Icon={PhoneIcon}
                                    error={errors.phone?.message || ''}
                                    {...field}
                                />
                            )}
                        />
                        <Button
                            type="submit"
                            color="primary"
                            loading={isLoading}
                            className={cx('submit-btn')}
                        >
                            Xác nhận
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default ProfileUpdatePage;
