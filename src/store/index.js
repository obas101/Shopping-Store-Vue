import Vuex from 'vuex';
import Vue from 'vue';
import products from './modules/products';

//load Vuex
Vue.use(Vuex);

//create store
export default new Vuex.Store({
    modules: {
        products
    } 
});