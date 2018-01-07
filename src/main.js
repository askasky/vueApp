// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import App from './App';
import router from './router';
import store from './store/index';
import './common/initialize';
import './assets/styles/reset.scss';
import './assets/styles/common.scss';

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', () => {
        FastClick.attach(document.body);
    }, false);
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
});
