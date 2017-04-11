// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import store from './stores'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import mainIndex from './views/main/main-index'

Vue.use(iView)
Vue.config.silent = false
Vue.config.devtools = true

new Vue({
  el: '#app',
  store: store,
  router: router,
  template: '<main-index/>',
  components: {mainIndex}
})
