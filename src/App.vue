<script setup>
import { RouterLink, RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar />

  <RouterView />
</template>

<style>
@import 'bulma/css/bulma.min.css';
</style>
