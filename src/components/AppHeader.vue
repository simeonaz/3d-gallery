<script>
window.addEventListener('resize', function () {
  location.reload()
})
export default {
  data() {
    return {
      menu: false
    }
  },
  methods: {
    changeMenuIcon() {
      const menuIcon = document.querySelector('.menu')
      if (menuIcon) {
        menuIcon.name = this.menu ? 'menu' : 'close'
      }
      this.menu = !this.menu

      const navLinks = document.querySelector('.nav-links')
      const header = document.querySelector('.header')
      if (this.menu) {
        navLinks.classList.remove('hidden')
        header.classList.remove('bg-inherit')
        navLinks.classList.add(
          'fixed',
          'bottom-0',
          'left-0',
          'w-full',
          'flex',
          'justify-center',
          'items-center',
          'rounded-t-[50px]',
          'mobile-navLinks',
          'z-[1000]',
          'show-menu'
        )
      } else {
        navLinks.classList.add('hidden')
      }
    }
  }
}
</script>

<template>
  <header class="header bg-white shadow w-full fixed top-0">
    <nav class="p-3 md:flex md:items-center md:justify-between">
      <div class="md:ml-6 flex justify-between items-center">
        <span class="text-3xl font-semibold cursor-pointer select-none"
          ><span class="text-red-400">do</span>jutsu</span
        >
        <button class="cursor-pointer block md:hidden mx-1" @click="changeMenuIcon">
          <ion-icon name="menu" class="menu" size="large"></ion-icon>
        </button>
      </div>
      <div
        class="overlay fixed top-0 left-0 w-full h-full z-[999]"
        v-if="menu"
        @click="changeMenuIcon"
      ></div>
      <div class="nav-links bg-[#270302] md:bg-inherit hidden md:flex lg:mr-4">
        <ul class="md:grid md:grid-cols-4 md:gap-x-8 md:place-items-center">
          <li class="mt-4 md:mt-0">
            <a href="#" class="text-lg text-gray-400 font-semibold hover:text-red-400 select-none"
              >Shop</a
            >
          </li>
          <li class="mt-8 md:mt-0">
            <a href="#" class="text-lg text-gray-400 font-semibold hover:text-red-400 select-none"
              >Created</a
            ><span
              class="px-2 py-1 ml-1 bg-gray-300 rounded-full text-sm text-black font-bold opacity-0 md:opacity-100 select-none"
              >14</span
            >
          </li>
          <li class="mt-8 md:mt-0">
            <a
              href="#"
              class="text-lg text-red-400 md:pb-3.5 md:border-b-4 md:border-red-400 font-semibold select-none"
              >Owned</a
            ><span
              class="px-2 py-1 ml-1 bg-gray-300 rounded-full text-sm text-black font-bold opacity-0 md:opacity-100 select-none"
              >8</span
            >
          </li>
          <li class="my-8 md:my-0">
            <a
              href="#"
              class="text-lg text-gray-400 font-semibold hover:hover:text-red-400 select-none"
              >Collection</a
            ><span
              class="px-2 py-1 ml-1 bg-gray-300 rounded-full text-sm text-black font-bold opacity-0 md:opacity-100 select-none"
              >12</span
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.mobile-navLinks {
  background: rgba(255, 255, 255, 0.9);
  transform: translateY(100%);
  transition: transform 3s ease;
}

.show-menu {
  transform: translateY(0);
}
.overlay {
  background: rgba(0, 0, 0, 0.7);
}
</style>
