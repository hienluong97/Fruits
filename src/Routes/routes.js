import Homepage from '../pages/homepage/Homepage.jsx';
import Products from '../pages/products/Products.jsx';

const publicRoutes = [
    {
        path: '/',
        component: Homepage,
    },
    { path: '/products', component: Products },
];

export { publicRoutes };
