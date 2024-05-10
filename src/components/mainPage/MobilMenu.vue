

<template>
  <Popover>
    <PopoverButton class=" rounded-md p-2 inline-flex items-center justify-center">
      <span class="sr-only">Открыть меню</span>
      <Bars4Icon class="h-8 w-8" aria-hidden="true"/>
    </PopoverButton>
    <PopoverPanel class="absolute top-0 right-0 p-2 transition transform origin-top-right md:hidden w-1/3 max-xs:w-full ">
      <div class="rounded-xl shadow-lg ring-1 ring-black ring-opacity-5  divide-y-2 divide-gray-50 bg-[#233436] ">
        <div class="pt-2 pb-6 px-5">
          <div class="flex items-center justify-end">
            <div class="-mr-2">
              <PopoverButton
                  class=" rounded-md p-2 inline-flex items-center justify-center  hover:opacity-60 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-card">
                <XCircleIcon class="h-8 w-8" aria-hidden="true"/>
              </PopoverButton>
            </div>
          </div>

          <div class=" ">
            <nav class="grid grid-cols-1 gap-5 text-basic-text font-normal">
              <ul>
                <li>
                  <router-link to="/" :class="['font-bold  hover:text-text-link', getLinkColor('/')]">Главная</router-link>
                </li>
                <li>
                  <router-link to="/about-me" :class="['font-bold  hover:text-text-link', getLinkColor('/about-me')]">Обо мне</router-link>
                </li>
                <li >
                  <router-link to="/about-site" :class="['font-bold  hover:text-text-link', getLinkColor('/about-site')]">О сайте</router-link>
                </li>
                <li >
                  <router-link to="/contacts" :class="['font-bold  hover:text-text-link', getLinkColor('/contacts')]">Контакты</router-link>
                </li>
              </ul>


            </nav>

          </div>

        </div>
      </div>
    </PopoverPanel>
  </Popover>
</template>

<script setup lang="ts">
import {Popover, PopoverButton, PopoverPanel} from "@headlessui/vue";
import { XCircleIcon, Bars4Icon} from "@heroicons/vue/24/outline";
import {useRoute} from "vue-router";
const route = useRoute();

function getLinkColor (routePath: string): string {
  return route.path === routePath ? 'text-text-link' : 'text-white';
}

</script>

<style scoped>

</style>