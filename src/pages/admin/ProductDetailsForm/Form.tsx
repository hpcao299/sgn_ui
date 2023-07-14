/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from '@/api/axiosClient';
import { InputField } from '@/components/custom-fields';
import { Button } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useNotifyContext } from '@/contexts/NotifyContext';
import { Category } from '@/types';
import classNames from 'classnames/bind';
import React, { ChangeEventHandler, useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import productApi from '../api/productApi';
import ImageUploader from './ImageUploader';
import styles from './ProductDetails.module.css';

const cx = classNames.bind(styles);

interface IProductDetailsForm {
    title: string;
    price: number;
    short_desc: string;
    full_desc: string;
    image_url: string;
    topic_id: number;
}

const defaultValues: IProductDetailsForm = {
    title: '',
    price: 1000,
    short_desc: '',
    full_desc: '',
    image_url: '',
    topic_id: 1,
};

interface FormProps {
    productId?: number;
    productDetails?: IProductDetailsForm;
}

const Form: React.FC<FormProps> = ({ productDetails, productId }) => {
    const { addNewNotification } = useNotifyContext();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState<boolean>();
    const { data } = useSWRImmutable('/topics/for-you', fetcher);
    const categoriesList = data?.data;
    const {
        control,
        handleSubmit,
        formState: { errors },
        register,
        setValue,
        getValues,
    } = useForm<IProductDetailsForm>({ defaultValues: productDetails || defaultValues });

    const addNewProduct = async (data: IProductDetailsForm) => {
        try {
            await productApi.addNewProduct(data);
            navigate(config.routes.adminProducts);
            addNewNotification(constants.notifications.ADD_PRODUCT_SUCCESS);
        } catch (error: any) {
            addNewNotification(constants.notifications.ADD_PRODUCT_FAILED);
        }
    };

    const editProduct = async (productId: number, data: IProductDetailsForm) => {
        try {
            await productApi.editProduct(productId, data);
            navigate(`/admin/products/${productId}`);
            addNewNotification(constants.notifications.EDIT_PRODUCT_SUCCESS);
        } catch (error) {
            addNewNotification(constants.notifications.EDIT_PRODUCT_FAILED);
        }
    };

    const onSubmit: SubmitHandler<IProductDetailsForm> = async data => {
        setIsLoading(true);
        if (productId) {
            await editProduct(productId, data);
        } else {
            await addNewProduct(data);
        }
        setIsLoading(false);
    };

    const handleImageChange = (url: string) => {
        setValue('image_url', url);
    };

    const handleCategoryChange: ChangeEventHandler<HTMLSelectElement> = e => {
        setValue('topic_id', Number(e.target.value));
    };

    return (
        <div className={cx('content')}>
            <h5 className="section-heading">
                {productDetails ? 'Chỉnh sửa sản phẩm' : 'Thêm sản phẩm mới'}
            </h5>
            <form onSubmit={handleSubmit(onSubmit)} className={cx('form')}>
                <Controller
                    name="title"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập tên sản phẩm.',
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Tên sản phẩm"
                            error={errors.title?.message || ''}
                            {...field}
                        />
                    )}
                />
                <div className={cx('price-input')}>
                    <Controller
                        name="price"
                        control={control}
                        rules={{
                            required: 'Vui lòng nhập giá sản phẩm.',
                            min: {
                                value: 1000,
                                message: 'Giá sản phẩm phải có ít nhất 1,000 VNĐ',
                            },
                        }}
                        render={({ field }) => (
                            <InputField
                                type="number"
                                placeholder="Giá bán"
                                error={errors.price?.message || ''}
                                {...field}
                            />
                        )}
                    />
                    <span className={cx('price-currency')}>VNĐ</span>
                </div>
                <Controller
                    name="short_desc"
                    control={control}
                    rules={{
                        required: 'Nhập miêu tả ngắn cho sản phẩm.',
                        minLength: {
                            value: 10,
                            message: 'Miêu tả sản phẩm phải có ít nhất 10 chữ.',
                        },
                    }}
                    render={({ field }) => (
                        <textarea
                            className={cx('textarea-input', errors.short_desc && 'error')}
                            cols={15}
                            rows={4}
                            placeholder="Mô tả ngắn"
                            {...field}
                        />
                    )}
                />
                {errors.short_desc?.message && (
                    <p className={cx('error-text')}>{errors.short_desc?.message}</p>
                )}
                <Controller
                    name="full_desc"
                    control={control}
                    rules={{
                        required: 'Mô tả sản phẩm.',
                        minLength: {
                            value: 10,
                            message: 'Miêu tả sản phẩm phải có ít nhất 10 chữ.',
                        },
                    }}
                    render={({ field }) => (
                        <textarea
                            className={cx('textarea-input', errors.full_desc && 'error')}
                            cols={15}
                            rows={6}
                            placeholder="Mô tả"
                            {...field}
                        />
                    )}
                />
                {errors.full_desc?.message && (
                    <p className={cx('error-text')}>{errors.full_desc?.message}</p>
                )}
                <select
                    className={cx('category-select')}
                    name="topic_id"
                    id="topic_id"
                    value={getValues('topic_id')}
                    onChange={handleCategoryChange}
                >
                    {categoriesList?.map((category: Category) => (
                        <option key={category.id} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    {...register('image_url', {
                        required: { value: true, message: 'Chọn hình ảnh cho sản phẩm.' },
                    })}
                    hidden
                    style={{ display: 'none' }}
                />
                <ImageUploader
                    previewImage={productDetails?.image_url}
                    onChange={handleImageChange}
                />
                {errors.image_url?.message && (
                    <p className={cx('error-text')}>{errors.image_url?.message}</p>
                )}
                <div className={cx('submit-btn')}>
                    <Button loading={isLoading}>Xác nhận</Button>
                </div>
            </form>
        </div>
    );
};

export default Form;
