import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import store from "./store";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import Vuex from 'vuex'
// const store = new Vuex.Store({
//   state: {
//     shoppingCart: []
//   },
//   mutations: {
//     addToCart(state, payload) {
//       const product = shoppingCart.find(x => x.productId == payload.productId && x.productSpecId == payload.productSpecId);
//       if (product !== undefined) {
//         product.shoppingCart.amount += payload.amount;
//       } else {
//         state.shoppingCart.push(payload);
//       }
//     }
//   },
// });
createApp(App).use(store).use(router).mount("#app");