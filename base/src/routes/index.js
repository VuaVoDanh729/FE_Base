import React from 'react';
import Home from '../pages/Home';
import Following from '../pages/Following';
import { DefaultLayout } from '../components/Layouts';

const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/following', component: Following, layout: DefaultLayout },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
