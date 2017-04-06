import Vue from 'vue'
import Router from 'vue-router'
import Article from '../pages/article.vue'
import ArticleDetail from '../pages/article-detail.vue'
import About from '../pages/about.vue'
import NotFound from '../pages/404.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'article',
      component: Article
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    },
    {
      path: '/article/:id',
      name: 'article-detail',
      component: ArticleDetail
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ]
})
