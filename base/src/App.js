import { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from './components/Layouts';
import { publicRoutes } from './routes';

function App() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) {
                            Layout = route.layout;
                        }
                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
