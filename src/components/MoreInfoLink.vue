

<template>
  <router-link :to="props.link" class="text-lg text-white hover:text-text-link font-semibold">Подробнее &#8702;</router-link>

</template>

<script setup lang="ts">
const props = defineProps<{link: string}>();

</script>

<style scoped>

</style>