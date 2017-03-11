import Vue from 'vue'
import VueRouter from 'vue-router'
import router_config from './router.config'

// 告诉vue要使用router
Vue.use(VueRouter)

/* eslint-disable no-new */
// 实例化router对象
const router = new VueRouter({
        mode: 'hash', // 设置路由模式 可选值: "hash" | "history" | "abstract"，默认"hash"
        linkActiveClass: 'u-link--Active', // 这是链接激活时的class
        // base: '/app/', // 这个是设置根目录路径，一般用不到，默认'/'
        router_config // 挂载路由集合 后面会说
    })
    // 导出router对象
export default router
