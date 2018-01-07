import api from '@/common/api';
import storage from 'storejs';
import * as types from '../mutation-types';

const state = {
    // 用户登录状态
    loginStatus: storage('loginStatus') || false,
    // 用户登录信息
    userInfo: storage('userInfo') || {},
    // 用户数据信息
    userData: []
};

const actions = {
    /**
     * 用户登录
     */
    setUserInfo({commit}, res) {
        storage.set('userInfo', res);
        storage.set('loginStatus', true);
        commit(types.SET_USER_INFO, res);
        commit(types.SET_LOGIN_STATUS, true);
    },

    /**
     * 退出登录
     */
    setSignOut({
        commit
    }) {
        storage.remove('loginStatus');
        storage.remove('userInfo');
        commit(types.SET_LOGIN_STATUS, false);
        commit(types.SET_USER_INFO, {});
    },

    /**
     * 请求用户信息
     */
    getUserData({
        commit
    }, id) {
        api.UserInfo(id)
            .then(res => {
                commit(types.GET_USER_DATA, res.data);
            });
    }
};

const getters = {
    getUserData: state => state.userData,
    loginStatus: state => state.loginStatus,
    userInfo: state => state.userInfo
};

const mutations = {
    [types.SET_USER_INFO](state, res) {
        state.userInfo = res;
    },

    [types.SET_LOGIN_STATUS](state, status) {
        state.loginStatus = status;
    },

    [types.GET_USER_DATA](state, res) {
        state.userData = res;
    }
};

export default {
    state,
    actions,
    getters,
    mutations
};
