<template>
  <header class="box-border">
    <div class="top-0 w-full h-[170px] py-4 px-6 md:h-60 bg-header bg-cover bg-center block">
      <div class="flex items-center justify-between">
        <div class="flex justify-start text-white">
          <a aria-label="Foundation logo" class="block cursor-pointer" href="/">
            <div class="w-16">
              <svg
                fill="none"
                viewBox="0 0 98 33"
                xmlns="http://www.w3.org/2000/svg"
                style="display: block"
              >
                <path
                  clip-rule="evenodd"
                  d="m64.8935 16.456c0 9.0884-7.3676 16.456-16.456 16.456s-16.456-7.3676-16.456-16.456c0-9.08839 7.3676-16.456 16.456-16.456s16.456 7.36761 16.456 16.456zm-47.9911-14.88859c.3016-.52241 1.0556-.52241 1.3572 0l16.7962 29.09189c.3017.5224-.0754 1.1754-.6786 1.1754h-33.592412c-.603231 0-.980249-.653-.678634-1.1754zm51.7119-.588048c-.8655 0-1.5672.701678-1.5672 1.567238v27.8185c0 .8656.7017 1.5673 1.5672 1.5673h27.8185c.8656 0 1.5673-.7017 1.5673-1.5673v-27.8185c0-.86556-.7017-1.567238-1.5673-1.567238z"
                  fill="white"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
          </a>
          <div>
            <a href="http://" class="px-4 text-['Suisse'] font-medium text-center">Feed</a>
            <a href="http://" class="px-4 text-['Suisse'] font-medium text-center">Trending</a>
          </div>
        </div>
        <div class="flex items-center w-64">
          <div class="relative">
            <input
              type="search"
              name=""
              id=""
              placeholder="Search web3"
              class="w-full min-h-12 font-medium text-ellipsis pr-8 pl-12 overflow-hidden rounded-full"
            />
            <div class="pointer-events-none left-5 absolute">
              <svg
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                style="display: block"
              >
                <path
                  d="M20 20L13.9741 13.9741"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div>
          <button type="button">Connect</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.bg-image-custom {
  background-image: url('');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 240px;
}
</style>
