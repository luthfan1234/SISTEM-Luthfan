<script setup lang="ts">
import HeaderContent from '@/components/HeaderContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import AuthorComponent from '@/components/AuthorComponent.vue';




</script>

<template>
  <HeaderContent/>
  <main>
    <AuthorComponent/>

    <slot></slot>
  </main>
  <FooterContent/>
</template>
