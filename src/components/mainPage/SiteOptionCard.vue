

<template>
  <div class="bg-bg-card relative">
    <div class="bg-bg-light-card absolute -top-2 px-5 py-3 rounded-md">
      <h3 class="text-center font-bold">{{props.title}}</h3>
    </div>
    <div class="pt-14 pb-7 px-6">
      <slot></slot>
    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps<{title: string}>();

</script>

<style scoped>

</style>