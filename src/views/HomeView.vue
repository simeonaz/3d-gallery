<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
import imagesList from '@/images'

/*window.addEventListener('resize', function () {
  location.reload()
})*/
let loadedCount = 0
const imgLoaded = (i) => {
  const index = i - 1
  imagesList[index].loaded = true
  loadedCount++
  if (loadedCount === imagesList.length) {
    console.log('Toutes les images ont été chargées avec succès.')
  }
}
</script>

<template class="max-w-screen min-h-screen font-[Poppins]">
  <AppHeader />
  <main class="max-w-full mx-6 mb-6 mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 select-none">
    <div
      v-for="item in imagesList"
      :key="item.id"
      class="w-full h-auto mx-auto bg-white shadow-lg cursor-pointer hover:shadow-2xl hover:lg:shadow-stone-900 rounded-lg overflow-hidden"
    >
      <figure class="group hover:relative">
        <img
          class="w-full h-80 object-cover object-center"
          :src="item.source"
          alt="3D image"
          @load="imgLoaded(item.id)"
        />

        <div
          class="hidden group-hover:flex group-hover:items-center group-hover:justify-center absolute inset-0 bg-black group-hover:opacity-50 transition-opacity"
        >
          <div class="flex">
            <span class="text-white flex"
              ><p class="text-lg font-semibold">{{ item.likes }}</p>
              <svg
                class="w-6 h-6 text-white ml-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M15 9.7h4a2 2 0 0 1 1.6.9 2 2 0 0 1 .3 1.8l-2.4 7.2c-.3.9-.5 1.4-1.9 1.4-2 0-4.2-.7-6.1-1.3L9 19.3V9.5A32 32 0 0 0 13.2 4c.1-.4.5-.7.9-.9h1.2c.4.1.7.4 1 .7l.2 1.3L15 9.7ZM4.2 10H7v8a2 2 0 1 1-4 0v-6.8c0-.7.5-1.2 1.2-1.2Z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            <span class="text-white flex ml-2"
              ><p class="text-lg font-semibold">{{ item.bookmarks }}</p>
              <svg
                class="w-6 h-6 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M7.8 2c-.5 0-1 .2-1.3.6A2 2 0 0 0 6 3.9V21a1 1 0 0 0 1.6.8l4.4-3.5 4.4 3.5A1 1 0 0 0 18 21V3.9c0-.5-.2-1-.5-1.3-.4-.4-.8-.6-1.3-.6H7.8Z"
                />
              </svg>
            </span>
          </div>
        </div>
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
        <div class="group hover:relative">
          <div class="flex mt-4">
            <img :src="item.source" alt="" class="rounded-full size-6" />
            <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@{{ item.author }}</span>
          </div>
          <div
            class="hidden absolute right-0 bottom-0 group-hover:block p-4 bg-white bg-opacity-95 border-solid shadow-2xl rounded-lg w-52 h-32"
          >
            <div class="flex items-center justify-between">
              <div class="flex">
                <img :src="item.source" alt="" class="rounded-full size-6" />
                <span class="font-bold text-sm text-gray-400 mt-0.5 ml-1">@{{ item.author }}</span>
              </div>
              <div>
                <button
                  class="px-2 py-1 bg-transparent hover:bg-slate-200 border-2 border-slate-200 rounded-lg"
                >
                  Follow
                </button>
              </div>
            </div>
            <div class="w-full mt-2">
              <p class="text-justify">{{ item.caption }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <AppFooter />
</template>
