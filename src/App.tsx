import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { Loader } from './components/elements';
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout';
import GlobalStyles from './components/layouts/GlobalStyles/GlobalStyles';
import PrivateRoute from './components/layouts/PrivateRoute/PrivateRoute';
import config from './config';
import ContextProviders from './contexts';
import NotFoundPage from './pages/NotFound';
import adminPages from './pages/admin';
import { privateRoutes, publicRoutes } from './routes/routes';
import { AuthWatcher, ScrollToTop } from './utils';

const Notifications = lazy(() => import('@/components/elements/Notifications'));

function App() {
    return (
        <GlobalStyles>
            <ContextProviders>
                <SWRConfig value={config.swr.value}>
                    <ScrollToTop />
                    <AuthWatcher />
                    <Suspense
                        fallback={
                            <div className="global-loader">
                                <Loader size="medium" />
                            </div>
                        }
                    >
                        <Routes>
                            {publicRoutes.map((route, index) => {
                                const Component = route.component;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        Component={() => (
                                            <DefaultLayout>
                                                <Component />
                                            </DefaultLayout>
                                        )}
                                    />
                                );
                            })}

                            {privateRoutes.map((route, index) => {
                                const Component = route.component;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        Component={() => (
                                            <DefaultLayout>
                                                <PrivateRoute>
                                                    <Component />
                                                </PrivateRoute>
                                            </DefaultLayout>
                                        )}
                                    />
                                );
                            })}
                            {adminPages()}
                            <Route path="*" Component={NotFoundPage} />
                        </Routes>
                    </Suspense>
                    <Notifications />
                </SWRConfig>
            </ContextProviders>
        </GlobalStyles>
    );
}

export default App;
