<script setup>
import AsideBar from '../components/AsideBar.vue';
</script>

<template>
  <!-- 侧边栏组件 -->
  <div class="flex w-full h-screen">
    <AsideBar></AsideBar>
    <RouterView />
  </div>
</template>