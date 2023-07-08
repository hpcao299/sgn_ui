import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout';
import GlobalStyles from './components/layouts/GlobalStyles/GlobalStyles';
import PrivateRoute from './components/layouts/PrivateRoute/PrivateRoute';
import config from './config';
import ContextProviders from './contexts';
import NotFoundPage from './pages/NotFound';
import { privateRoutes, publicRoutes } from './routes/routes';
import { ScrollToTop } from './utils';

function App() {
    return (
        <GlobalStyles>
            <ContextProviders>
                <SWRConfig value={config.swr.value}>
                    <DefaultLayout>
                        <ScrollToTop />
                        <Routes>
                            {publicRoutes.map((route, index) => (
                                <Route key={index} path={route.path} Component={route.component} />
                            ))}

                            {privateRoutes.map((route, index) => {
                                const Component = route.component;

                                return (
                                    <Route
                                        key={index}
                                        path={route.path}
                                        Component={() => (
                                            <PrivateRoute>
                                                <Component />
                                            </PrivateRoute>
                                        )}
                                    />
                                );
                            })}

                            <Route path="*" Component={NotFoundPage} />
                        </Routes>
                    </DefaultLayout>
                </SWRConfig>
            </ContextProviders>
        </GlobalStyles>
    );
}

export default App;
