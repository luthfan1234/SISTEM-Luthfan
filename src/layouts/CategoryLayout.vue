<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import CategorySection from '@/components/CategorySection.vue';




</script>
<template>
  <HeaderContent/>
  <main>
    <CategorySection/>
    <slot></slot>
  </main>
  <FooterContent/>
</template>
