import Vue from "vue";
import VueSocketIO from 'vue-socket.io'
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "view-design/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://192.168.111.28:5000/',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_'
    },
}))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
