import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/posts',
        name: 'posts',
        component: () => import('../views/posts.vue')
      },{
        path: '/albums',
        name: 'albums',
        component: () => import('../views/albums.vue')
      },
    ]
  })
  
  export default router