import { ReactComponent as PhoneIcon } from '@/assets/icons/phone.svg';
import { ReactComponent as UserIcon } from '@/assets/icons/user.svg';
import { InputField } from '@/components/custom-fields';
import { Button } from '@/components/elements';
import constants from '@/constants';
import classNames from 'classnames/bind';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import styles from './PaymentForm.module.css';

const cx = classNames.bind(styles);

interface IPaymentForm {
    name: string;
    phone: string;
    address: string;
    email: string;
    message?: string;
}

const defaultValues: IPaymentForm = {
    name: '',
    phone: '',
    address: '',
    email: '',
    message: '',
};

const PaymentForm: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IPaymentForm>({ defaultValues });

    const onSubmit: SubmitHandler<IPaymentForm> = async data => {
        console.log(data);
    };

    return (
        <div className={cx('payment-form')}>
            <h4>Thông tin thanh toán</h4>
            <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập tên người nhận.',
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Tên người nhận"
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
                            placeholder="Email nhận thông tin"
                            Icon={UserIcon}
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
                            placeholder="Số điện thoại của bạn"
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
                        required: 'Vui lòng nhập địa chỉ.',
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Địa chỉ nhận hàng"
                            Icon={UserIcon}
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
                            Icon={UserIcon}
                            error={errors.message?.message || ''}
                            {...field}
                        />
                    )}
                />
                <Button type="submit" color="primary" className={cx('submit-btn')}>
                    xác nhận
                </Button>
            </form>
        </div>
    );
};

export default PaymentForm;
