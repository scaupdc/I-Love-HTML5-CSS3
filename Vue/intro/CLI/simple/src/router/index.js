import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import store from '../stores'

import errorPage from '../views/404.vue'
import dashboardIndex from '../views/dashboard/dashboard-index.vue'
import dashboard_1_1 from '../views/dashboard/dashboard-1-1.vue'
import dashboard_1_2 from '../views/dashboard/dashboard-1-2.vue'
import dashboard_2_1 from '../views/dashboard/dashboard-2-1.vue'
import dashboard_2_2 from '../views/dashboard/dashboard-2-2.vue'
import dashboardWelcome from '../views/dashboard/dashboard-welcome.vue'
import blogIndex from '../views/blog/blog-index.vue'
import blogDetail from '../views/blog/blog-detail.vue'
import loginIndex from '../views/login/login-index.vue'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: {
        main: dashboardIndex
      },
      meta: {requiresAuth: true},
      children: [
        {
          path: '',
          name: 'root',
          components: {
            dashboard: dashboardWelcome
          }
        }
      ]
    },
    {
      path: '/index',
      components: {
        main: dashboardIndex
      },
      meta: {requiresAuth: true},
      children: [
        {
          path: 'dashboard-1-1',
          name: 'dashboard-1-1',
          components: {
            dashboard: dashboard_1_1
          }
        },
        {
          path: 'dashboard-1-2',
          name: 'dashboard-1-2',
          components: {
            dashboard: dashboard_1_2
          }
        },
        {
          path: 'dashboard-2-1',
          name: 'dashboard-2-1',
          components: {
            dashboard: dashboard_2_1
          }
        },
        {
          path: 'dashboard-2-2',
          name: 'dashboard-2-2',
          components: {
            dashboard: dashboard_2_2
          }
        },
        {
          path: '',
          name: 'index',
          components: {
            dashboard: dashboardWelcome
          }
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      components: {
        main: blogIndex
      },
      meta: {requiresAuth: true},
    },
    {
      path: '/blog/:blogid',
      name: 'blog-detail',
      components: {
        main: blogDetail
      },
      meta: {requiresAuth: true},
    },
    {
      path: '/login',
      name: 'login-index',
      components: {
        main: loginIndex
      }
    },
    {
      path: '*',
      name: 'error-page',
      components: {
        main: errorPage
      }
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
