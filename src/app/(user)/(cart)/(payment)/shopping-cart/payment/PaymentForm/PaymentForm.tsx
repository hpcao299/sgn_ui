'use client';

import orderApi from '@/apis/orderApi';
import EmailIcon from '@/assets/icons/email.svg';
import LocationIcon from '@/assets/icons/location.svg';
import MessageIcon from '@/assets/icons/message.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import UserIcon from '@/assets/icons/user.svg';
import { Button } from '@/components';
import { InputField } from '@/components/custom-fields';
import config from '@/config';
import constants from '@/constants';
import { useAuthStore, useNotifyStore } from '@/stores';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';
import React, { memo, useEffect, useMemo, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './PaymentForm.module.css';

const cx = classNames.bind(styles);

interface IPaymentForm {
    name: string;
    phone: string;
    address: string;
    email: string;
    message: string;
}

const PaymentForm: React.FC = () => {
    const router = useRouter();
    const addNewNotification = useNotifyStore(state => state.addNewNotification);
    const [currentUser, setNumItems] = useAuthStore(state => [
        state.currentUser,
        state.setNumItems,
    ]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const defaultValues = useMemo(
        () => ({
            name: currentUser?.name || '',
            phone: currentUser?.phone || '',
            address: '',
            email: currentUser?.email || '',
            message: '',
        }),
        [currentUser],
    );
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<IPaymentForm>({ defaultValues });

    useEffect(() => {
        if (currentUser) {
            reset(defaultValues);
            setIsLoading(false);
            router.prefetch(config.routes.profile);
        }
    }, [currentUser, defaultValues, reset]);

    const onSubmit: SubmitHandler<IPaymentForm> = async data => {
        setIsLoading(true);
        try {
            await orderApi.confirmOrder(data);
            addNewNotification(constants.notifications.CONFIRM_ORDER_SUCCESS);
            setNumItems(0);
            router.push(config.routes.profile);
        } catch (error) {
            addNewNotification(constants.notifications.CONFIRM_ORDER_FAILED);
            console.error(error);
        }
        setIsLoading(false);
    };

    return (
        <div className={cx('payment-form')}>
            <h3>Thông tin thanh toán</h3>

            <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập tên người nhận.',
                        minLength: {
                            value: 2,
                            message: 'Tên phải có ít nhất 2 kí tự.',
                        },
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Tên người nhận*"
                            Icon={UserIcon}
                            error={errors.name?.message || ''}
                            {...field}
                        />
                    )}
                />
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
                            placeholder="Email nhận thông tin*"
                            Icon={EmailIcon}
                            error={errors.email?.message || ''}
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
                            placeholder="Số điện thoại của bạn*"
                            Icon={PhoneIcon}
                            error={errors.phone?.message || ''}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="address"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập địa chỉ nhận hàng.',
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Địa chỉ nhận hàng*"
                            Icon={LocationIcon}
                            error={errors.address?.message || ''}
                            {...field}
                        />
                    )}
                />
                <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Tin nhắn (tuỳ chọn)"
                            Icon={MessageIcon}
                            error={errors.message?.message || ''}
                            {...field}
                        />
                    )}
                />
                <Button
                    loading={isLoading}
                    type="submit"
                    color="primary"
                    className={cx('submit-btn')}
                >
                    xác nhận
                </Button>
            </form>
        </div>
    );
};

export default memo(PaymentForm);
