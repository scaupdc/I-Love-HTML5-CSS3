import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import store from '../stores'

const errorPage = resolve => require.ensure([], () => resolve(require('../views/404.vue')))
const dashboardIndex = resolve => require.ensure([], () => resolve(require('../views/dashboard/dashboard-index.vue')), 'dashboardIndex')
const dashboardWelcome = resolve => require.ensure([], () => resolve(require('../views/dashboard/dashboard-welcome.vue')), 'dashboardIndex')
const dashboard_1_1 = resolve => require.ensure([], () => resolve(require('../views/dashboard/dashboard-1-1.vue')))
const dashboard_1_2 = resolve => require.ensure([], () => resolve(require('../views/dashboard/dashboard-1-2.vue')))
const dashboard_2_1 = resolve => require.ensure([], () => resolve(require('../views/dashboard/dashboard-2-1.vue')))
const dashboard_2_2 = resolve => require.ensure([], () => resolve(require('../views/dashboard/dashboard-2-2.vue')))
const blogIndex = resolve => require.ensure([], () => resolve(require('../views/blog/blog-index.vue')))
const blogDetail = resolve => require.ensure([], () => resolve(require('../views/blog/blog-detail.vue')))
const loginIndex = resolve => require.ensure([], () => resolve(require('../views/login/login-index.vue')))

// const dashboard_1_2 = resolve => require(['../views/dashboard/dashboard-1-2.vue'], resolve)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: dashboardIndex,
      meta: {requiresAuth: true},
      children: [
        {
          path: '/index/dashboard-1-1',
          name: 'dashboard-1-1',
          component: dashboard_1_1
        },
        {
          path: 'dashboard-1-2',
          name: 'dashboard-1-2',
          component: dashboard_1_2
        },
        {
          path: 'dashboard-2-1',
          name: 'dashboard-2-1',
          component: dashboard_2_1
        },
        {
          path: 'dashboard-2-2',
          name: 'dashboard-2-2',
          component: dashboard_2_2
        },
        {
          path: '',
          name: 'index',
          component: dashboardWelcome
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: blogIndex,
      meta: {requiresAuth: true},
    },
    {
      path: '/blog/:blogid',
      name: 'blog-detail',
      component: blogDetail,
      meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name: 'login-index',
      component: loginIndex,
    },
    {
      path: '*',
      name: 'error-page',
      component: errorPage,
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.auth) {
      next()
    } else {
      next({path: '/login'})
    }
  } else {
    next()
  }
})

export default router
