import axios from 'axios'

const state = {
    products: null,
    activeProduct: null
};

const mutations = {
     SET_HOMEPAGE_PRODUCTS (state, products) {
             state.products = products
        },
     SET_PRODUCT (state, product) {
             state.activeProduct = product
        }
};

const actions = {
        async getHomeProducts ({ commit }) {
                let { data } = await axios.get('http://localhost:9595/products');
                commit("SET_HOMEPAGE_PRODUCTS", data)
        },
        async getProduct ({ commit }, payload) {
                let { data } = await axios.get(`http://localhost:9595/products/${payload.id}`);
                console.log(data);
                commit("SET_PRODUCT", data)
        }
};

export default {
    state,
    actions,
    mutations
}