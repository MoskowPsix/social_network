import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/Index.vue')
      },
      {
        path: '/page',
        name: 'page',
        component: () => import('../views/Page.vue')
      },
      {
        path: '/user/login',
        name: 'user.login',
        component: () => import('../views/user/Login.vue')
      },
      {
        path: '/user/registration',
        name: 'user.registration',
        component: () => import('../views/user/Registration.vue')
      },
      {
        path: '/user/personal',
        name: 'user.personal',
        component: () => import('../views/user/Personal.vue')
      },
    ]
  
  })

  router.beforeEach((to, from, next) => {
    axios.get('/get/user').catch(err => {
      if(err.response.status === 401) {
        localStorage.key('x_xsrf_token') ? localStorage.removeItem('x_xsrf_token') : null
      }
    })
    const token = localStorage.getItem('x_xsrf_token')
    if(!token) {
      if (to.name === 'user.login' || to.name === 'user.registration') {
        return next()
      } else {
        return next({name: 'user.login'})
      }
    }
  
    if (to.name === 'login' || to.name === 'registration' && token) {
      return next({name: 'user.personal'})
    }
    next()
  })

export default router