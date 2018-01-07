import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const Login = () => import('pages/Login');

export default new Router({
    // linkActiveClass: 'active',
    routes: [{
        path: '/',
        redirect: '/login'
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }]
});
