'use client';

import usersApi from '@/apis/usersApi';
import PhoneIcon from '@/assets/icons/phone.svg';
import UserIcon from '@/assets/icons/user.svg';
import { Button } from '@/components';
import { InputField } from '@/components/custom-fields';
import config from '@/config';
import constants from '@/constants';
import { useAuthStore, useNotifyStore } from '@/stores';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './UpdateProfile.module.css';

const cx = classNames.bind(styles);

interface IUpdateProfileForm {
    name: string;
    phone: string;
}

const defaultValues: IUpdateProfileForm = {
    name: '',
    phone: '',
};

const UpdateProfileForm: React.FC = () => {
    const router = useRouter();
    const getCurrentUser = useAuthStore(state => state.getCurrentUser);
    const addNewNotification = useNotifyStore(state => state.addNewNotification);
    const [isLoading, setIsLoading] = useState<boolean>();
    const [error, setError] = useState<string>();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IUpdateProfileForm>({ defaultValues });

    useEffect(() => {
        router.prefetch(config.routes.profile);
    }, []);

    const onSubmit: SubmitHandler<IUpdateProfileForm> = async data => {
        setIsLoading(true);
        try {
            await usersApi.updateUserDetails(data);
            addNewNotification(constants.notifications.UPDATE_PROFILE_SUCCESS);
            getCurrentUser();
            router.push(config.routes.home);
        } catch (error: any) {
            setError(error.message);
            addNewNotification(constants.notifications.UPDATE_PROFILE_FAILED);
        }
        setIsLoading(false);
    };

    return (
        <div className={cx('wrapper')}>
            <h1>Cập nhật thông tin</h1>
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
    );
};

export default UpdateProfileForm;
