import Vue from 'vue';
import VueRouter from 'vue-router'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Header from './components/Header';
import App from './App';
import './index.html';

Vue.use(VueRouter);

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