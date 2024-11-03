<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import BlogPostSection from '@/components/BlogPostSection.vue';



</script>

<template>
  <HeaderContent/>
  <main>
    <BlogPostSection/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>

