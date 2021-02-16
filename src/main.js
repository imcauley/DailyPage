import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

import Writing from './components/Writing';

Vue.use(VueRouter)

Vue.config.productionTip = false

const routes = [
  { path: '/today', component: Writing },
  { path: '/history', component: Writing },
];

const router = new VueRouter({ routes });

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
