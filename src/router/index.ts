import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component :BlogView,
    },
    {
      path: '/about',
      name: 'about',
      component :AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component :ContactView,
    },
    {
      path: '/privacy',
      name: 'privacy',
      component :PrivacyView,
    },
  ],
})

export default router

