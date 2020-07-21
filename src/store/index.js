/*
vuex最核心的管理对象store
 */

import Vuex from 'vuex';
import Vue from 'vue';
import getShopInfo from './modules/getShopInfo.js';
import getShopCar from './modules/getShopCar';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        getShopInfo,
        getShopCar
    }
    
})