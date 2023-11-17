import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/index',
            name: 'index',
            components: () => import('../views/Index.vue') 
        },
        {
            path: '/page',
            name: 'page',
            components: () => import('../views/Page.vue') 
        }
    ]
})

export default router