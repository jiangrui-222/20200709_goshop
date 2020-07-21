// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import {Button,Switch} from 'mint-ui'
import router from '@/router/router.js';
import store from './store';
import VueLazyload from 'vue-lazyload' //图片懒加载

import './filter'  //加载过滤器
import loading from './common/imgs/loading.gif' //图片

Vue.config.productionTip = false
Vue.component(Button.name, Button)  // <mt-button>
Vue.component(Switch.name, Switch);

Vue.use(VueLazyload,{
  loading
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
