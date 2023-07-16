import { Button, Loader } from '@/components/elements';
import classNames from 'classnames/bind';
import React, { ChangeEventHandler, memo, useEffect, useState } from 'react';
import uploaderApi from '../api/uploaderApi';
import styles from './ProductDetailsForm.module.css';
import useSWRImmutable from 'swr/immutable';

const cx = classNames.bind(styles);

interface ImageUploaderProps {
    onChange: (url: string) => void;
    previewImage?: string;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({
    onChange,
    previewImage: previewImageProp,
}) => {
    useSWRImmutable(import.meta.env.VITE_APP_UPLOADER_BASE_URL, { shouldRetryOnError: false });
    const [file, setFile] = useState<File>();
    const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
        previewImageProp || '',
    );
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const uploadImage = async (file: File) => {
            setIsLoading(true);
            try {
                const data = await uploaderApi.uploadAnImage(file);
                onChange(data.data.url);
                setError('');
            } catch (error) {
                setError('Đã có lỗi xảy ra');
            }
            setIsLoading(false);
        };

        if (file) {
            uploadImage(file);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [file]);

    const handleImageChange: ChangeEventHandler<HTMLInputElement> = e => {
        if (!e.currentTarget.files) {
            return;
        }

        const file = e.currentTarget.files[0];
        const reader = new FileReader();

        setFile(file);
        reader.onload = () => {
            setPreviewImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className={cx('upload-image')}>
            <div style={{ width: 'fit-content' }}>
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
            </div>
            <input
                type="file"
                id="product_img"
                name="product_img"
                accept="image/*"
                hidden
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            {isLoading && (
                <div style={{ marginTop: '24px', marginLeft: '4px' }}>
                    <Loader />
                </div>
            )}
            {error && <p className={cx('error-text')}>{error}</p>}
            {previewImage && !isLoading && !error && (
                <img src={previewImage as string} alt="Ảnh" className={cx('uploaded-image')} />
            )}
        </div>
    );
};

export default memo(ImageUploader);
