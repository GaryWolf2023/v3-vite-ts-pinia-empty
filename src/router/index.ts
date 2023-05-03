import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页',
      keepAlive: true,
      requireAuth: true
     },
    component: () => import('@/views/home/home.vue')
   },
  {
  path: '/login',
  name: 'login',
  meta: {
    title: '登录',
    keepAlive: true,
    requireAuth: false
   },
  component: () => import('@/views/login/login.vue')
  },
  {
    path: '/*',
    name: '404',
    meta: {
      title: '404',
      keepAlive: true,
      requireAuth: false
      },
    component: () => import('@/components/statusPage/404.vue')
  }
]

const router = createRouter({
 history: createWebHistory(),
 routes
});
export default router;