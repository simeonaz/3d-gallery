<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import imageList from '@/images'
</script>

<template class="max-w-screen min-h-screen font-[Poppins]">
  <AppHeader />
  <main class="max-w-full mx-6 mb-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 select-none">
    <div
      v-for="item in imageList"
      :key="item.id"
      class="w-full h-auto mx-auto bg-white shadow-lg cursor-pointer hover:shadow-2xl rounded-lg overflow-hidden"
    >
      <img class="w-full h-80 object-cover object-center" :src="item.source" alt="3D image" />
      <div class="px-4 py-2">
        <div class="flex justify-start w-full">
          <img :src="item.source" alt="" class="rounded-full w-6 h-6" />
          <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@{{ item.owner }}</span>
        </div>
      </div>
      <div class="px-4 py-2 flex justify-between">
        <div class="grid">
          <span class="text-md text-semibold">Price</span>
          <span class="inline-block text-xl font-semibold text-gray-700">$100.00</span>
        </div>
        <div class="flex mt-4" @mouseover="showCard">
          <img :src="item.source" alt="" class="rounded-full w-6 h-6" />
          <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@{{ item.author }}</span>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
