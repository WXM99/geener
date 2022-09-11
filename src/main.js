import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import axios from '../node_modules/axios'
import 'vant/lib/index.css';
import Vant,{Lazyload} from 'vant';
import { Toast } from 'vant';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'bootstrap/dist/css/bootstrap.css'

/* UI lib enabled */
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Toast);
Vue.use(BootstrapVue);


/* axios default settings */
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
axios.defaults.withCredentials = true; // ajax with coockie
Vue.prototype.$axios = axios;
Vue.prototype.$ajax = axios;
// todo: change `axios.defaults.baseURL` when dispatch or integrate testing
axios.defaults.baseURL = 'http://localhost:8080';
Vue.config.productionTip = false;

/* vuex storage settings */
Vue.use(Vuex);
const store = {
  login: false,
  username: ""
}
export default store

new Vue({
  render: h => h(App),
  router,
  axios,
  store,
  components: { App }
}).$mount('#app');
