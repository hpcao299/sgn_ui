import { InputField } from '@/components/custom-fields';
import { Button } from '@/components/elements';
import classNames from 'classnames/bind';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import ImageUploader from './ImageUploader';
import styles from './NewProduct.module.css';

const cx = classNames.bind(styles);

interface INewProductForm {
    title: string;
    price: number;
    short_desc: string;
    full_desc: string;
    image_url: string;
}

const defaultValues: INewProductForm = {
    title: '',
    price: 1000,
    short_desc: '',
    full_desc: '',
    image_url: '',
};

const NewProductPage: React.FC = () => {
    const {
        control,
        handleSubmit,
        formState: { errors },
        register,
        setValue,
    } = useForm<INewProductForm>({ defaultValues });

    const onSubmit: SubmitHandler<INewProductForm> = async data => {
        console.log(data);
    };

    const handleImageChange = (url: string) => {
        setValue('image_url', url);
    };

    return (
        <div className={cx('content')}>
            <h5 className="section-heading">Thêm sản phẩm mới</h5>
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
                <input
                    type="text"
                    {...register('image_url', {
                        required: { value: true, message: 'Chọn hình ảnh cho sản phẩm.' },
                    })}
                    hidden
                    style={{ display: 'none' }}
                />
                <ImageUploader onChange={handleImageChange} />
                {errors.image_url?.message && (
                    <p className={cx('error-text')}>{errors.image_url?.message}</p>
                )}
                <div className={cx('submit-btn')}>
                    <Button>Xác nhận</Button>
                </div>
            </form>
        </div>
    );
};

export default NewProductPage;
