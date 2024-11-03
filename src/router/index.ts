import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogPostView from '@/views/BlogPostView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'
import PrivacyView from '@/views/PrivacyView.vue'
import BlogView from '@/views/BlogView.vue'
import CategoryView from '@/views/CategoryView.vue'
import AuthorVeiw from '@/views/AuthorVeiw.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blogpost',
      name: 'blogpost',
      component :BlogPostView,
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
    {
      path: '/blog',
      name: 'blog',
      component :BlogView,
    },
    {
      path: '/blog/business',
      name: 'blog/business',
      component :CategoryView,
    },
    {
      path: '/blog/startup',
      name: 'blog/startup',
      component :CategoryView,
    },
    {
      path: '/blog/economy',
      name: 'blog/economy',
      component :CategoryView,
    },
    {
      path: '/blog/technology',
      name: 'blog/technology',
      component :CategoryView,
    },
    {
      path: '/author',
      name: 'author',
      component :AuthorVeiw,
    },
  ],
})

export default router

