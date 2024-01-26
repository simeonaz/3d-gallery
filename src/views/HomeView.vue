<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import imageList from '@/images'
</script>

<template class="max-w-screen min-h-screen font-[Poppins]">
  <AppHeader />
  <main
    class="max-w-full mx-6 mb-6 mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 select-none"
  >
    <div
      v-for="item in imageList"
      :key="item.id"
      class="w-full mx-auto bg-white shadow-lg hover:shawdow-xl rounded-lg overflow-hidden"
    >
      <img class="w-full object-cover object-center" :src="item.source" alt="3D image" />
      <div class="px-6 py-4">
        <div class="flex justify-between">
          <h3 class="text-xl font-bold text-gray-800">AI #MADEIT</h3>
        </div>
        <div class="flex justify-start ml-2 w-full border-b-2 pb-2.5">
          <img :src="item.source" alt="" class="rounded-full w-6 h-6" />
          <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@justinbieber</span>
        </div>
      </div>
      <div class="px-6 py-4 flex justify-between mx-4">
        <span class="inline-block text-xl font-semibold text-gray-700 mr-2">$100.00</span>
        <button
          class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
        >
          View
        </button>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
