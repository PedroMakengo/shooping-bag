import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    productsInBag: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
    addToBag(state, product) {
      state.productsInBag.push(product);
      console.log(state.productsInBag.length);
    },
  },
  actions: {
    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then(response => {
        commit("loadProducts", response.data);
      });
    },

    addToBag({ commit }, product) {
      console.log(product);
      commit("addToBag", product);
    },
  },
  modules: {},
});
