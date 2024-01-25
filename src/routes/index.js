import Login from '../containers/Auth/Login';
const publicRoutes = [
    {
        path: '/',
    },
    {
        path: '/login',
        component: Login,
    },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
