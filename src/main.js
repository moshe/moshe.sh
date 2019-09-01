import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";

// import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
