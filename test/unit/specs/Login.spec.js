import Vue from 'vue';
import Login from '@/pages/Login';
import { createTest } from '../util'
describe('Login.vue', () => {
  
  after(function() {
    console.log('轮到我了');
  });
  
  it('测试按钮', () => {
    // const Constructor = Vue.extend(Login);
    // const vm = new Constructor().$mount();
    // expect(vm.$el.querySelector('#login').innerText).to.equal('登录');

      let vm = createTest(Hello, { content: 'Hello World' }, true)
      expect(vm.userName).to.equal('zhangsan')
  });
});
