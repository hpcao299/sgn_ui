import { Route } from '@/types';
import config from '@/config';

// Pages
import HomePage from '@/pages/Home';
import ProductsPage from '@/pages/Products';
import ProductsDetailsPage from '@/pages/ProductsDetails';
import ShoppingCartPage from '@/pages/ShoppingCart';
import LoginPage from '@/pages/Login';
import SignupPage from '@/pages/Signup';
import ProfilePage from '@/pages/Profile';
import ProfileUpdatePage from '@/pages/ProfileUpdate';
import PaymentPage from '@/pages/Payment';

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
