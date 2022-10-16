import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
  },
  mutations: {
    loadProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      let response = await axios.get("https://fakestoreapi.com/products");
      let data = await response.data;
      commit("loadProducts", data);
    },
  },
  modules: {},
});
