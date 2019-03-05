import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import routes from './routes.js'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const router = new VueRouter({
  routes: routes
})

Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
