<template>
    <Menu :slug="slug"/>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  const slug = route.params.slug;
  </script>
  