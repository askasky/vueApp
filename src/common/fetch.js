import { AjaxPlugin } from 'vux';
import Vue from 'vue';
import qs from 'qs';
import { LOCALHOST } from './config';

// import * as _ from '../util/tool'

Vue.use(AjaxPlugin);

const axios = Vue.http;
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = LOCALHOST;

// POST传参序列化
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    //  toast("错误的传参", 'fail');
    return Promise.reject(error);
});

// 返回状态判断
axios.interceptors.response.use((res) => {
    if (!res.data.status) {
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    //  _.toast("网络异常", 'fail');
    return Promise.reject(error);
});

export function fetch(url, params, type) {
    return new Promise((resolve, reject) => {
        params = type === 'get' ? { params } : params;
        axios[type || 'post'](url, params)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
