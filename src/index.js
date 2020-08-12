import Vue from 'vue';
import VueRouter from 'vue-router'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Header from './components/Header';
import Carousel from './components/Carousel';
import Homepage from './components/Homepage';
// import GoogleMap from './components/GoogleMap';
import Card from './components/Card';
import Maps from './components/Maps';
import Test from './components/Test';
import App from './App';

import './index.html';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(VueRouter);
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
// import * as VueGoogleMaps from 'vue2-google-maps';


// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyDKj7UwiGJOqczLJiqBXWRaPB_3fKn0GZs',
//     libraries: 'places' // necessary for places input
//   }
// });

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/page1', component: Page1 },
    { path: '/page2', component: Page2 },
    { path: '/header', component: Header },
    { path: '/', component: Homepage },
    { path: '/carousel', component: Carousel },
    // { path: '/maps', component: Maps },
    { path: '/card', component: Card },
    { path: '/maps', component: Maps },
    { path: '/test', component: Test },
  ],
});

new Vue({
  el: '#app',
  router: router,

  render: h => h(App),
});