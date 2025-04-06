
import { createRouter,createWebHashHistory } from "vue-router";

import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path:'/',
        redirect:'/login'
    },
    {
        path: '/login',
        name: 'login',
        component:()=>import('../view/Login.vue')
    },
    {
        path: '/home',
        name: 'home',
        component:()=>import('../view/MainWindow.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;