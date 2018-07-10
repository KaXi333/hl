// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import store from './vuex/store'
import App from './App'
import router from './router'
import './common/stylus/loginRes.styl'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './common/stylus/common.css'
import './common/stylus/all.css'
import './common/stylus/semantic.min.css'
import './common/stylus/normalize.css'
import './common/stylus/styles.css'
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer);
Vue.use(BootstrapVue);
axios.defaults.baseURL='https://farm-api.h5ck.com/game/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
Vue.prototype.$axios = axios;

//request拦截器
axios.interceptors.request.use(
    config => {
        //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
        if(store.state.token){
            config.headers.token = `${store.state.token}`;
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    }
);

//respone拦截器
axios.interceptors.response.use(
    response => {
        return response;
    },
    error => { //默认除了2XX之外的都是错误的，就会走这里
        if(error.response){
            switch(error.response.status){
                case 401:
                    this.$store.commit('removetoken'); //可能是token过期，清除它
                    router.replace({ //跳转到登录页面
                        path: 'sign_in',
                        query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
                    });
            }
        }
        return Promise.reject(error.response);
    }
);
// axios.defaults.withCredentials = true
// axios.defaults.headers.post['Content-Type'] = 'application/json'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
