import Vue from "vue";
import Highlight from "vue-markdown-highlight";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(Highlight);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
