<template>
  <aside class="w-80 h-screen border-r bg-white">
    <div class="py-3 bg-cyan-500">
      <img src="/logo.svg" class="w-32">
    </div>

    <div class="text-center shadow-xl py-6 cursor-pointer">
      <img src="https://i2.100024.xyz/2023/01/26/3e727b.webp" class="w-32 h-32 m-auto rounded-full object-cover">
      <h5 class="mt-4 text-xl font-semibold text-gray-600 lg:block">InfinityX7</h5>
      <span class="hidden text-gray-400 lg:block">Admin</span>
    </div>

    <ul class="mt-6">
      <li>
        <RouterLink to="/dashboard" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600">
          <!-- 使用图标库 https://github.com/tailwindlabs/heroicons -->
          <ComputerDesktopIcon class="h-6 w-6 text-gray-400" />
          <span class="group-hover:text-cyan-400">仪表盘</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/category" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600">
          <DocumentChartBarIcon class="h-6 w-6 text-gray-400" />
          <span class="group-hover:text-cyan-400">分 类</span>
        </RouterLink>
      </li>

      <li>
        <RouterLink to="/about" class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600">
          <DocumentChartBarIcon class="h-6 w-6 text-gray-400" />
          <span class="group-hover:text-cyan-400">关 于</span>
        </RouterLink>
      </li>
    </ul>


    <div class="border-t fixed bottom-0 w-80">
      <RouterLink to="/login">
        <button class="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
          <ArrowRightCircleIcon class="h-6 w-6 text-gray-400" />
          <span class="group-hover:text-cyan-500">退出</span>
        </button>
      </RouterLink>
    </div>
  </aside>
</template>


<script setup>
import { ComputerDesktopIcon, DocumentChartBarIcon, ArrowRightCircleIcon } from '@heroicons/vue/24/solid'
</script>

<style scoped>
/* 路由激活样式 */
ul li a.router-link-exact-active {
  @apply bg-gradient-to-r from-sky-600 to-cyan-400 text-white;
}
</style>