// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router' //导入目录时默认识别里面的index.js

console.log(App.name)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    //以下两行可以写成...App
    template: '<App/>',
    components: { App }
})
