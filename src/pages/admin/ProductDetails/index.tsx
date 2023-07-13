import { Button } from '@/components/elements';
import classNames from 'classnames/bind';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styles from './ProductDetails.module.css';

const cx = classNames.bind(styles);

const ProductDetailsPage: React.FC = () => {
    return (
        <div>
            <h5 className="section-heading">Giấy gói hàng size 70cm x 100cm</h5>
            <p className={cx('product-has-sold')}>
                Đã bán: 12 <span className={cx('product-growth')}>+ 1,75%</span>
            </p>
            <div className={cx('product-details')}>
                <LazyLoadImage
                    src="http://trangvangtructuyen.vn/files/products/cong_ty_tnhh_dau_tu_thuong_mai_sai_gon_nguyen_830499nS.jpg"
                    alt="Title"
                    className={cx('product-img')}
                    height="100%"
                    style={{ backgroundColor: '#dadada' }}
                />
                <div className={cx('product-info')}>
                    <h3 className={cx('product-title')}>Giấy gói hàng size 70cm x 100cm</h3>
                    <p className={cx('product-price')}>Giá bán: 25,000 VNĐ</p>
                    <div className={cx('product-short-desc')}>
                        Ngày nay mặt hàng văn phòng phẩm như giấy in, giấy photo là không thể thiếu
                        tại các văn phòng, công ty, tiệm photo hay các trường học. Vấn đề ở đây quý
                        khách sẽ chọn lựa loại giấy in nào cho phù hợp, vừa đảm bảo chất lượng in
                        cũng vừa đảm bảo tốt vấn đề giá cả. Hôm nay Văn phòng phẩm giá rẻ sẽ giới
                        thiệu đến quý khách hàng giấy Excel A4 80gsm.
                    </div>
                    <div className={cx('edit-btn')}>
                        <Button>Chỉnh sửa thông tin</Button>
                    </div>
                </div>
            </div>
            <div className={cx('product-more-info')}>
                <h5 className="section-heading">Mô tả đầy đủ</h5>
                <p className={cx('product-full-desc')}>
                    Giấy A4 Excel 80 gsm là loại giấy in photo thông dụng trong các công ty văn
                    phòng hiện nay. kích thước khổ A4, định lượng giấy 80gsm, giấy nặng 80gr trên
                    1m2, có độ dày tương đối phù hợp với các dòng mấy in hiện đại. - Được sử dụng
                    nhiều trong in, photo, để đóng thành cuốn hoặc dùng làm phiếu thu - chỉ - xuất -
                    nhập - đơn đặt hàng trong các văn phòng công ty kinh doanh. - Đây là loại khá
                    phổ biến và được khách hàng ưa chuộng hiện nay vì định lượng và độ dày phù hợp
                    với các dòng máy in hiện đại, sử dụng Giấy A4 Excel 80 gsm bạn sẽ không phải lo
                    lắng về chất lượng các bản in, kẹt giấy khi in hay nhòe chữ. - Kích thước khổ
                    giấy A4, định lượng 80gsm, giấy có độ dày tương đối cao, các mép giấy được cắt
                    chính xác, tránh trường hợp bị kẹt giấy. Chất lượng: Đẹp, trắng, mịn, láng. Quy
                    cách: Khổ A4 hướng dẫn bảo quản: Giấy thuộc loại vật liệu dễ bị cháy, dễ nhòe
                    chữ khi thấm nước, bị vò nát không trở lại độ phẳng, căng của bề mặt giấy như
                    ban đầu, cho nên: - Tránh để nơi có nhiệt độ quá cao - Tránh để gần nơi có dầu
                    mỡ, nước. - Để cao tầm với của trẻ em, với những giấy tờ quan trọng. - Không để
                    bụi bám qua nhiều làm ảnh hưởng đến độ sáng, độ mịn và định lượng của giấy.
                </p>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
