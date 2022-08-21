import Vue from 'vue'
import App from './App.vue'
import { router } from "./router"
import axios from 'axios'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex'
Vue.use(ElementUi);
Vue.config.productionTip = false
Vue.prototype.$bus = new Vue();
Vue.prototype.$axios = axios;
console.log("main");
new Vue({
  router, store,
  render: h => h(App),
}).$mount('#app')
