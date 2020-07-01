import Vue from 'vue';
import VueRouter from 'vue-router'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Header from './components/Header';
import App from './App';
import './index.html';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/header', component: Header },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});