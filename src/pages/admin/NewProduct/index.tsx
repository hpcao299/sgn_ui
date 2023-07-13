import React from 'react';
import styles from './NewProduct.module.css';
import classNames from 'classnames/bind';
import { InputField } from '@/components/custom-fields';
import { Button } from '@/components/elements';

const cx = classNames.bind(styles);

const NewProductPage: React.FC = () => {
    return (
        <div className={cx('content')}>
            <h5 className="section-heading">Thêm sản phẩm mới</h5>
            <form className={cx('form')}>
                <InputField name="title" type="text" placeholder="Tên sản phẩm" />
                <div className={cx('price-input')}>
                    <InputField name="price" type="number" placeholder="Giá bán" />
                    <span className={cx('price-currency')}>VNĐ</span>
                </div>
                <textarea
                    className={cx('textarea-input')}
                    name="short_desc"
                    cols={15}
                    rows={4}
                    placeholder="Mô tả ngắn"
                ></textarea>
                <textarea
                    className={cx('textarea-input')}
                    name="full_desc"
                    cols={15}
                    rows={6}
                    placeholder="Mô tả"
                ></textarea>
                <div className={cx('upload-image')}>
                    <Button type="button" variant="outlined" size="small">
                        <label
                            htmlFor="product_img"
                            style={{
                                display: 'block',
                                height: '100%',
                                lineHeight: '28px',
                                cursor: 'pointer',
                            }}
                        >
                            Tải ảnh
                        </label>
                    </Button>
                    <input
                        type="file"
                        id="product_img"
                        name="product_img"
                        accept="image/png, image/jpeg"
                        hidden
                        style={{ display: 'none' }}
                    />
                </div>
                <div className={cx('submit-btn')}>
                    <Button>Xác nhận</Button>
                </div>
            </form>
        </div>
    );
};

export default NewProductPage;
