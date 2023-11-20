import { createRouter, createWebHistory,createWebHashHistory } from "vue-router";

const router = createRouter({
    history: createWebHashHistory ("/"),
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
    ]
  
  })

export default router