import { fetch } from './fetch';

export default {
    /**
     * 用户登录
     */
    login(params) {
        return fetch('/appbasic/login.do', params);
    },
    /**
     * 用户注册
     */
    regist(params) {
        return fetch('/appbasic/register.do', params);
    }
};
