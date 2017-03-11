import Vue from 'vue'
import router from './router'

import App from './App'

/* eslint-disable no-new */
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
