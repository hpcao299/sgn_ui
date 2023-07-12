import AdminLayout from '@/components/layouts/AdminLayout';
import config from '@/config';
import React from 'react';
import { Route } from 'react-router-dom';

const HomePage = React.lazy(() => import('./Home'));
const OrdersPage = React.lazy(() => import('./Orders'));
const ProductsPage = React.lazy(() => import('./Products'));
const ProductDetailsPage = React.lazy(() => import('./ProductDetails'));
const UsersPage = React.lazy(() => import('./Users'));

const routes = [
    { path: config.routes.admin, component: HomePage },
    { path: config.routes.adminOrders, component: OrdersPage },
    { path: config.routes.adminProducts, component: ProductsPage },
    { path: config.routes.adminProductDetails, component: ProductDetailsPage },
    { path: config.routes.adminUsers, component: UsersPage },
];

const adminPages = () => {
    return (
        <>
            {routes.map((route, i) => {
                const Page = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        Component={() => (
                            <AdminLayout>
                                <Page />
                            </AdminLayout>
                        )}
                    />
                );
            })}
        </>
    );
};

export default adminPages;
