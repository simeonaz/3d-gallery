<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import imageList from '@/images'

/*window.addEventListener('resize', function () {
  location.reload()
})*/
let loadedCount = 0
const imgLoaded = (index) => {
  console.log(`L'image ${index} a été correctement chargée.`)
  imageList[index].loaded = true
  loadedCount++
  if (loadedCount === imageList.length) {
    console.log('Toutes les images ont été chargées avec succès.')
  }
}
</script>

<template class="max-w-screen min-h-screen font-[Poppins]">
  <AppHeader />
  <main class="max-w-full mx-6 mb-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 select-none">
    <div
      v-for="item in imageList"
      :key="item.id"
      class="w-full h-auto mx-auto bg-white shadow-lg cursor-pointer hover:shadow-2xl hover:lg:shadow-stone-900 rounded-lg overflow-hidden"
    >
      <figure>
        <img
          class="w-full h-80 object-cover object-center"
          :src="item.source"
          alt="3D image"
          @load="imgLoaded(item.id)"
        />
      </figure>
      <div class="px-4 py-2">
        <div class="flex justify-start w-full">
          <img :src="item.source" alt="" class="rounded-full size-6" />
          <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@{{ item.owner }}</span>
        </div>
      </div>
      <div class="px-4 py-2 flex justify-between">
        <div class="grid">
          <span class="text-md text-semibold">Price</span>
          <span class="inline-block text-xl font-semibold text-gray-700">$100.00</span>
        </div>
        <div class="flex mt-4">
          <img :src="item.source" alt="" class="rounded-full size-6" />
          <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@{{ item.author }}</span>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>

<style scoped>
.card {
  opacity: 0;
  animation: card-animation 5s;
  animation-iteration-count: 1;
}

@keyframes card-animation {
  from {
    opacity: 0;
    width: 10px;
    height: 10px;
  }
  to {
    opacity: 1;
    width: 100%;
    height: auto;
  }
}
</style>
