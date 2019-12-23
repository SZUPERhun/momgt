import Vue from 'vue';
import App from './App.vue';

import Router from 'vue-router';
import Index from '@/views/Index';
import Bands from '@/views/Bands';
import Band from '@/views/Band';
import Concerts from '@/views/Concerts';
import About from '@/views/About';

Vue.config.productionTip = false;

//import BootStrap
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import Vuex from 'vuex'
Vue.use(Vuex);
import { store } from '@/store/store';


Vue.use(Router);
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
    },
    {
      path: '/bands',
      component: Bands,
      name: 'bands',
    },
    {
      path: '/band/:id',
      component: Band,
      name: 'band',
      props: route => ({
        id: route.params.id
      })
    },
    {
      path: '/concerts',
      component: Concerts,
      name: 'concerts',
    },
    {
      path: '/about',
      component: About,
      name: 'about',
    },
  ],
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');
