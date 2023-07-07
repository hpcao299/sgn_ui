import { Route, Routes } from 'react-router-dom';
import DefaultLayout from './components/layouts/DefaultLayout/DefaultLayout';
import GlobalStyles from './components/layouts/GlobalStyles/GlobalStyles';
import { privateRoutes, publicRoutes } from './routes/routes';
import PrivateRoute from './components/layouts/PrivateRoute/PrivateRoute';
import NotFoundPage from './pages/NotFound';
import { ScrollToTop } from './utils';
import ContextProviders from './contexts';

function App() {
    return (
        <GlobalStyles>
            <ContextProviders>
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
            </ContextProviders>
        </GlobalStyles>
    );
}

export default App;
