/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetcher } from '@/api/axiosClient';
import { InputField } from '@/components/custom-fields';
import { Button } from '@/components/elements';
import config from '@/config';
import constants from '@/constants';
import { useNotifyContext } from '@/contexts/NotifyContext';
import { Category } from '@/types';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import useSWRImmutable from 'swr/immutable';
import productApi from '../api/productApi';
import ImageUploader from './ImageUploader';
import styles from './ProductDetailsForm.module.css';

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
    short_desc:
        'Ngày nay mặt hàng văn phòng phẩm như giấy in, giấy photo là không thể thiếu tại các văn phòng, công ty, tiệm photo hay các trường học. Vấn đề ở đây quý khách sẽ chọn lựa loại giấy in nào cho phù hợp, vừa đảm bảo chất lượng in cũng vừa đảm bảo tốt vấn đề giá cả. Hôm nay Văn phòng phẩm giá rẻ sẽ giới thiệu đến quý khách hàng giấy Excel A4 80gsm.',
    full_desc:
        'Giấy A4 Excel 80 gsm là loại giấy in photo thông dụng trong các công ty văn phòng hiện nay. kích thước khổ A4, định lượng giấy 80gsm, giấy nặng 80gr trên 1m2, có độ dày tương đối phù hợp với các dòng mấy in hiện đại. - Được sử dụng nhiều trong in, photo, để đóng thành cuốn hoặc dùng làm phiếu thu - chỉ - xuất - nhập - đơn đặt hàng trong các văn phòng công ty kinh doanh. - Đây là loại khá phổ biến và được khách hàng ưa chuộng hiện nay vì định lượng và độ dày phù hợp với các dòng máy in hiện đại, sử dụng Giấy A4 Excel 80 gsm bạn sẽ không phải lo lắng về chất lượng các bản in, kẹt giấy khi in hay nhòe chữ. - Kích thước khổ giấy A4, định lượng 80gsm, giấy có độ dày tương đối cao, các mép giấy được cắt chính xác, tránh trường hợp bị kẹt giấy. Chất lượng: Đẹp, trắng, mịn, láng. Quy cách: Khổ A4 hướng dẫn bảo quản: Giấy thuộc loại vật liệu dễ bị cháy, dễ nhòe chữ khi thấm nước, bị vò nát không trở lại độ phẳng, căng của bề mặt giấy như ban đầu, cho nên: - Tránh để nơi có nhiệt độ quá cao - Tránh để gần nơi có dầu mỡ, nước. - Để cao tầm với của trẻ em, với những giấy tờ quan trọng. - Không để bụi bám qua nhiều làm ảnh hưởng đến độ sáng, độ mịn và định lượng của giấy.',
    image_url: 'abc',
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
                <select className={cx('category-select')} id="topic_id" {...register('topic_id')}>
                    {categoriesList?.map((category: Category) => (
                        <option key={category.id} value={category.id}>
                            {category.title}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    // {...register('image_url', {
                    //     required: { value: true, message: 'Chọn hình ảnh cho sản phẩm.' },
                    // })}
                    {...register('image_url')}
                    hidden
                    style={{ display: 'none' }}
                />
                <Controller
                    name="image_url"
                    control={control}
                    rules={{
                        required: 'Vui lòng nhập link ảnh sản phẩm.',
                    }}
                    render={({ field }) => (
                        <InputField
                            type="text"
                            placeholder="Link ảnh sản phẩm"
                            error={errors.title?.message || ''}
                            {...field}
                        />
                    )}
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