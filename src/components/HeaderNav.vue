

<template>
  <header class="h-16 w-full z-50 fixed top-0  bg-bg-body shadow-xl" >
    <nav class="max-md:hidden pt-4">
      <ul class="flex flex-row justify-end items-center h-full" >
        <li class="pr-8">
          <router-link to="/" :class="['font-bold  hover:text-text-link', getLinkColor('/')]">Главная</router-link>
        </li>
        <li class="pr-8">
          <router-link to="/about-me" :class="['font-bold  hover:text-text-link', getLinkColor('/about-me')]">Обо мне</router-link>
        </li>
        <li class="pr-8">
          <router-link to="/about-site" :class="['font-bold  hover:text-text-link', getLinkColor('/about-site')]">О сайте</router-link>
        </li>
        <li class="pr-8 ">
          <router-link to="/contacts" :class="['font-bold  hover:text-text-link', getLinkColor('/contacts')]">Контакты</router-link>
        </li>
      </ul>
    </nav>
    <div class="flex justify-end md:hidden mr-5 mt-2">
      <mobil-menu  />
    </div>


  </header>

</template>

<script setup lang="ts">

import {useRoute} from "vue-router";
import MobilMenu from "@/components/mainPage/MobilMenu.vue";

const route = useRoute();

function getLinkColor (routePath: string): string {
  return route.path === routePath ? 'text-text-link' : 'text-white';
}

</script>

<style scoped>

</style>