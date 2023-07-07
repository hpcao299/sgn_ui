import { Button, PageDetails, QuantitySelector, RenderOnView } from '@/components/elements';
import config from '@/config';
import classNames from 'classnames/bind';
import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './ProductDetails.module.css';

const RelatedProducts = React.lazy(() => import('./components/RelatedProducts'));

const cx = classNames.bind(styles);

const ProductsDetailsPage: React.FC = () => {
    const params = useParams();

    const paths = [
        {
            title: 'Trang chủ',
            to: config.routes.home,
        },
        { title: 'Sản phẩm', to: config.routes.products },
        { title: 'Giấy Photocopy A4 80GSM', to: `/products/${params.slug}` },
    ];

    return (
        <>
            <PageDetails title="Giấy Photocopy A4 80GSM" paths={paths} />
            <div style={{ paddingBottom: '100px' }} className="container">
                <div className={cx('product-main-content')}>
                    <div className={cx('product-image')}>
                        <img
                            src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_604odh2k.jpg"
                            alt="Product title"
                        />
                    </div>
                    <div className={cx('product-details')}>
                        <div className={cx('product-info')}>
                            <h1 className={cx('product-title')}>Giấy Photocopy A4 80GSM</h1>
                            <div className={cx('product-price')}>25,000VNĐ</div>
                            <p className={cx('product-desc')}>
                                Ngày nay mặt hàng văn phòng phẩm như giấy in, giấy photo là không
                                thể thiếu tại các văn phòng, công ty, tiệm photo hay các trường học.
                                Vấn đề ở đây quý khách sẽ chọn lựa loại giấy in nào cho phù hợp, vừa
                                đảm bảo chất lượng in cũng vừa đảm bảo tốt vấn đề giá cả. Hôm nay
                                Văn phòng phẩm giá rẻ sẽ giới thiệu đến quý khách hàng giấy Excel A4
                                80gsm.
                            </p>
                        </div>
                        <QuantitySelector />
                        <div className={cx('product-actions')}>
                            <Button>đặt ngay</Button>
                            <Button variant="outlined">thêm vào giỏ hàng</Button>
                        </div>
                    </div>
                </div>
                <div className={cx('product-sub-content')}>
                    <div className={cx('product-content-header')}>
                        <p>Mô tả</p>
                    </div>
                    <p className={cx('product-full-desc')}>
                        Giấy A4 Excel 80 gsm là loại giấy in photo thông dụng trong các công ty văn
                        phòng hiện nay. kích thước khổ A4, định lượng giấy 80gsm, giấy nặng 80gr
                        trên 1m2, có độ dày tương đối phù hợp với các dòng mấy in hiện đại. - Được
                        sử dụng nhiều trong in, photo, để đóng thành cuốn hoặc dùng làm phiếu thu -
                        chi - xuất - nhập - đơn đặt hàng trong các văn phòng công ty kinh doanh. -
                        Đây là loại khá phổ biến và được khách hàng ưa chuộng hiện nay vì định lượng
                        và độ dày phù hợp với các dòng máy in hiện đại, sử dụng Giấy A4 Excel 80 gsm
                        bạn sẽ không phải lo lắng về chất lượng các bản in, kẹt giấy khi in hay nhòe
                        chữ. - Kích thước khổ giấy A4, định lượng 80gsm, giấy có độ dày tương đối
                        cao, các mép giấy được cắt chính xác, tránh trường hợp bị kẹt giấy. Chất
                        lượng: Đẹp, trắng, mịn, láng. Quy cách: Khổ A4 hướng dẫn bảo quản: Giấy
                        thuộc loại vật liệu dễ bị cháy, dễ nhòe chữ khi thấm nước, bị vò nát không
                        trở lại độ phẳng, căng của bề mặt giấy như ban đầu, cho nên: - Tránh để nơi
                        có nhiệt độ quá cao - Tránh để gần nơi có dầu mỡ, nước. - Để cao tầm với của
                        trẻ em, với những giấy tờ quan trọng. - Không để bụi bám qua nhiều làm ảnh
                        hưởng đến độ sáng, độ mịn và định lượng của giấy.
                    </p>
                </div>
            </div>
            <RenderOnView>
                <RelatedProducts />
            </RenderOnView>
        </>
    );
};

export default ProductsDetailsPage;
