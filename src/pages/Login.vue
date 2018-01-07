<!--  -->
<template>
    <div class="login-page">
        <img src="../assets/images/logo.png" alt="" class="logo">
        <Group>
            <XInput title="用户名" v-model="userName"></XInput>
            <XInput title="密 码" type="password" v-model="password"></XInput>
        </Group>
        <Group>
            <XButton @click.native='login' type="primary" id="login">登录2</XButton>
            <XButton @click.native='getInfo' type="primary">获取信息</XButton>
        </Group>
    </div>
</template>

<script>
import {Group, XButton, XInput} from 'vux';
import {mapActions, mapState} from 'vuex';
import api from '@/common/api';
export default {
    data() {
        return {
            userName: 'zhangsan',
            password: '123456'
        };
    },

    components: {
        Group,
        XButton,
        XInput
    },
    methods: {
        ...mapActions({ setUserInfo: 'setUserInfo' }),
        login() {
            api.login({
                userName: this.userName,
                password: this.password
            }).then((res) => {
                console.log(this.$store);
                this.setUserInfo(res.data);
                this.$router.replace('/mfsMa');
            }).catch((err) => {
                console.log(err);
            });
        },
        getInfo() {
            // console.log(this.$store.state.user.userInfo.userName)
        }
    },
    computed: {
        ...mapState(['user'])
    },

    mounted: function() {
    }
};
</script>

<style lang='scss' scoped>
    .login-page{
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    .logo{
        display: block;
        margin: 0.28rem auto;
    }
    .login-bg{
        position: absolute;
        left: 0;
        top:0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }
</style>