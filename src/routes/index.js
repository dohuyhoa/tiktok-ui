import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
const publicRoutes = [
    //ko cần đưng nhập vẫn vào các trang trong này
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
];
const privateRoutes = [];
//Cần đăng nhập vẫn vào các trang trong này

export { publicRoutes, privateRoutes };
