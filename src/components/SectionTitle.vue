
<template>
  <div class="flex flex-row pb-8">
    <div class="border-title-row border-b-2 w-[3rem] mr-3"></div>
    <h2 class="text-3xl -mb-2">{{props.title}}</h2>
    <div class="border-title-row border-b-2 grow ml-3"></div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{title: string}>();

</script>

<style scoped>

</style>