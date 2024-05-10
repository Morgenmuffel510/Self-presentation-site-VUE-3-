

<template>

  <div :class="['border border-white  rounded-md  py-2 ' , props.bgColor]">

      <p v-if="props.link === ''" class="text-center font-bold px-3">
        {{props.title}}
      </p>
      <a v-else :href="props.link" class="block text-white hover:opacity-60 text-center font-bold px-3">
        {{props.title}}
      </a>
    <div class="w-full h-[1px] bg-white"></div>


    <p class="text-center px-5 py-2 px-3">{{props.subtitle}}</p>

  </div>

</template>

<script setup lang="ts">
const props = defineProps<{title: string, link: string, bgColor: string, subtitle: string}>();
</script>

<style scoped>

</style>