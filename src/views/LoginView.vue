<script setup>
</script>

<template>
  <!-- component -->
  <div class="bg-white dark:bg-gray-900">
    <div class="flex justify-center h-screen">
      <div class="hidden bg-cover lg:block lg:w-2/3"
        style="background-image: url(https://images.unsplash.com/photo-1616763355603-9755a640a287?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)">
        <div class="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
          <div>
            <h2 class="text-4xl font-bold text-white">Tailwind CSS</h2>
            <p class="max-w-xl mt-3 text-gray-300">
              Tailwind CSS 是一个功能类优先的 CSS 框架，它集成了诸如 flex, pt-4, text-center 和 rotate-90 这样的的类，它们能直接在脚本标记语言中组合起来，构建出任何设计。
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
        <div class="flex-1">
          <div class="text-center">
            <h2 class="text-4xl font-bold text-center text-gray-700 dark:text-white">登 录</h2>
            <p class="mt-3 text-gray-500 dark:text-gray-300">登录你的账号</p>
          </div>

          <div class="mt-8">
            <form>
              <div>
                <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-200">邮箱</label>
                <input type="email" name="email" id="email" placeholder="example@example.com"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <div class="mt-6">
                <div class="flex justify-between mb-2">
                  <label for="password" class="text-sm text-gray-600 dark:text-gray-200">密码</label>
                  <a href="#"
                    class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">忘记密码?</a>
                </div>

                <input type="password" name="password" id="password" placeholder="Your Password"
                  class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
              </div>

              <RouterLink to="/">
                <div class="mt-6">
                  <button
                    class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-cyan-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                    登 录
                  </button>
                </div>
              </RouterLink>
            </form>

            <p class="mt-6 text-sm text-center text-gray-400">没有账号? <a href="#"
                class="text-cyan-500 focus:outline-none focus:underline hover:underline">去注册</a>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>