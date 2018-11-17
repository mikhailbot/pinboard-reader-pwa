<template>
  <div class="w-full h-full bg-white border-t-4 border-indigo-dark pt-4 pb-12">
    <nuxt/>

    <div class="h-12 w-full bg-white border-t border-grey-light fixed pin-b pin-l">
      <div class="flex h-full items-center ">
        <div class="w-1/3 border-r border-indigo-lightest">
          <nuxt-link
            to="/articles"
            class="w-full text-center inline-block fill-current text-indigo-dark">
            <svg
              class="w-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20">
              <path d="M7.05 9.293L6.343 10 12 15.657l1.414-1.414L9.172 10l4.242-4.243L12 4.343z"/>
            </svg>
          </nuxt-link>
        </div>
        <div class="w-1/3 text-center fill-current text-indigo-dark border-r border-indigo-lightest">
          <svg
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20">
            <path d="M0 2C0 .9.9 0 2 0h16a2 2 0 0 1 2 2v2H0V2zm1 3h18v13a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V5zm6 2v2h6V7H7z"/>
          </svg>
        </div>
        <div class="w-1/3 text-center text-indigo-dark"><span class="font-semibold">P</span>R</div>
      </div>
    </div>
  </div>
</template>

<style>
</style>
