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

    // admin: '/admin',

    // adminProducts: '/admin/products',
    // adminAddProduct: '/admin/products/new',
    // adminProductDetails: '/admin/products/:id',
    // adminEditProduct: '/admin/products/edit/:id',

    // adminOrders: '/admin/orders',
    // adminOrderDetails: '/admin/orders/:id',

    // adminUsers: '/admin/users',

    admin: '/',

    adminProducts: '/products',
    adminAddProduct: '/products/new',
    adminProductDetails: '/products/:id',
    adminEditProduct: '/products/edit/:id',

    adminOrders: '/orders',
    adminOrderDetails: '/orders/:id',

    adminUsers: '/users',
};

export default routes;
