const routes = {
    home: '/',
    info: '/info',
    service: '/services',
    new: '/news',
    contact: '/contact',

    products: '/products',
    productsDetails: '/products/:slug',

    cart: '/shopping-cart',
    payment: '/shopping-cart/payment',

    profile: '/account/profile',
    profileUpdate: '/account/update-profile',

    login: '/login',
    signup: '/signup',
    forgotPassword: '/forgot-password',

    admin: '/admin',
    adminProducts: '/admin/products',
    adminProductDetails: '/admin/products/:id',
    adminOrders: '/admin/orders',
    adminUsers: '/admin/users',
};

export default routes;
