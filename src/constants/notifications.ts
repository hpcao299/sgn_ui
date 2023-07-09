import { NotificationDetails } from '@/contexts/NotifyContext';

const notifications: { [key: string]: NotificationDetails } = {
    LOGIN_SUCCESS: {
        title: 'Đăng nhập thành công',
        message: 'Bạn đã có thể trải nghiêm dịch vụ của chúng tôi.',
        type: 'success',
    },
    SIGNUP_SUCCESS: {
        title: 'Đăng ký thành công',
        message: 'Hoàn thành cập nhật thông tin và trải nghiệm dịch vụ.',
        type: 'success',
    },

    UPDATE_PROFILE_SUCCESS: {
        title: 'Cập nhật thông tin thành công',
        message: 'Bạn đã có thể trải nghiêm dịch vụ của chúng tôi.',
        type: 'success',
    },
    UPDATE_PROFILE_FAILED: {
        title: 'Cập nhật thông tin thất bại',
        message: 'Đã có lỗi xảy ra.',
        type: 'error',
    },

    NEED_SIGNED_IN: {
        title: 'Bạn chưa đăng nhập',
        message: 'Bạn cần đăng nhập trước khi sử dụng dịch vụ.',
        type: 'info',
    },

    ADD_TO_CART_SUCCESS: {
        title: 'Đã thêm sản phẩm vào giỏ',
        message: 'Bạn có thể kiểm tra sản phầm ở giỏ hàng.',
        type: 'success',
    },
    ADD_TO_CART_FAILED: {
        title: 'Không thể thêm sản phẩm',
        message: 'Đã có lỗi xảy ra.',
        type: 'error',
    },

    CONFIRM_ORDER_SUCCESS: {
        title: 'Xác nhận đơn hàng thành công',
        message: 'Kiểm tra đơn hàng ngay ở trang cá nhân.',
        type: 'success',
    },
    CONFIRM_ORDER_FAILED: {
        title: 'Không thể xác nhận đơn',
        message: 'Đã có lỗi xảy ra.',
        type: 'error',
    },

    SIGN_OUT_FAILED: {
        title: 'Đăng xuất thất bại',
        message: 'Đã có lỗi xảy ra.',
        type: 'error',
    },
};

export default notifications;