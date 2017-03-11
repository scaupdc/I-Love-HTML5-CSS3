// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import App from './App.vue'
import router_config from './config/routes'
const router = new VueRouter({
    router_config
})

/* eslint-disable no-new */
new Vue({
    router,
    el: '#app',
    render: (h) => h(App)
})
