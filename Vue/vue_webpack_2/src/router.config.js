// 导入之前写好的两个模板
import Home from './components/Home.vue'
import Article from './components/Article.vue'

// 编写路由集合
const router_config = [{
            name: 'Home', // 路由名，这个字段是可选的
            path: '/', // 路由路径，这里是根路径所以是'/'
            component: Home // 模板
        }, // 这些是常用的
        {
            name: 'Article',
            path: '/article',
            component: Article
        }
    ]
    // 导出路由集合
export default router_config
