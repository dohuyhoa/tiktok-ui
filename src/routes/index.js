import { HeaderOnly } from '~/components/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
// public routes
const publicRoutes = [
    //ko cần đăng nhập vẫn vào các trang trong này
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
];
// private routes
const privateRoutes = [];
//Cần đăng nhập mới vào các trang trong này

export { publicRoutes, privateRoutes };
