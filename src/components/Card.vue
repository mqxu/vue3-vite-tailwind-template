<template>
  <div class="p-4 sm:w-1/2 lg:w-1/3 w-full hover:scale-105 duration-500 cursor-pointer">
    <div class="flex items-center justify-between p-6 rounded-lg shadow-xl info">
      <div>
        <h3 class="mt-2 text-xl font-bold text-left">{{ item.title }}</h3>
        <p class="text-sm font-semibold text-gray-200 mt-2">{{ item.subTitle }}</p>
        <button class="text-sm mt-6 px-4 py-2 bg-indigo-400 text-white rounded-lg  hover:bg-indigo-500 outline-none">
          立即开始
        </button>
      </div>
      <div
        class="bg-gradient-to-tr from-indigo-500 to-indigo-300 w-32 h-32 rounded-full shadow-2xl shadow-[item.color] border-white  border-dashed border-2 flex justify-center items-center ">
        <div>
          <h1 class="text-white text-2xl">{{ item.logo }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';

defineProps({
  item: Object
})

const item = reactive({
  title: 'Composition API',
  subTitle: 'Get Started',
  color: '#8187EE',
  bgColor: '#c7d2fe',
  logo: 'Vue 3'
})
</script>

<style scoped>
.info {
  color: v-bind('item.color');
  background-color: v-bind('item.bgColor');
}
</style>