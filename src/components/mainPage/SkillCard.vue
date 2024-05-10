
<template>
  <div class="bg-bg-card">
    <div class="bg-bg-light-card" >
      <h3 class="text-center text-2xl py-7 px-5">{{props.title}}</h3>
    </div>
    <div class="px-10 py-5">
      <slot></slot>
    </div>
  </div>

</template>

<script setup lang="ts">
const props = defineProps<{title: string}>();

</script>


<style scoped>

</style>