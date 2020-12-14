import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import HomePage from './components/HomePage';
import CustomerSupport from "./components/CustomerSupport";
import AboutUs from "./components/AboutUs";

Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
  { path: '/homepage', component: HomePage },
  { path: '/customer-support', component: CustomerSupport },
  { path: '/about-us', component: AboutUs }

]

const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
