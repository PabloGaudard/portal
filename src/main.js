import Vue from "vue";
import App from "./App.vue";

import VuePablo from 'vue-pablo';
Vue.use(VuePablo);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
