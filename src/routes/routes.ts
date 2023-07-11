import { Route } from '@/types';
import config from '@/config';
import { lazy } from 'react';

// Pages
import HomePage from '@/pages/Home';
import ProductsPage from '@/pages/Products';
import ProductsDetailsPage from '@/pages/ProductsDetails';
import ProfilePage from '@/pages/Profile';
import PaymentPage from '@/pages/Payment';

const ShoppingCartPage = lazy(() => import('@/pages/ShoppingCart'));
const LoginPage = lazy(() => import('@/pages/Login'));
const SignupPage = lazy(() => import('@/pages/Signup'));
const ProfileUpdatePage = lazy(() => import('@/pages/ProfileUpdate'));

const publicRoutes: Route[] = [
    {
        path: config.routes.home,
        component: HomePage,
    },
    {
        path: config.routes.products,
        component: ProductsPage,
    },
    {
        path: config.routes.productsDetails,
        component: ProductsDetailsPage,
    },
    {
        path: config.routes.login,
        component: LoginPage,
    },
    {
        path: config.routes.signup,
        component: SignupPage,
    },
];

const privateRoutes: Route[] = [
    {
        path: config.routes.cart,
        component: ShoppingCartPage,
    },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.profileUpdate, component: ProfileUpdatePage },
    { path: config.routes.payment, component: PaymentPage },
];

export { publicRoutes, privateRoutes };
