

<template>

  <div class="relative">
    <img :src="bgCard" :alt="title">
    <div :class="['absolute', isDown ? 'top-10' : 'top-0']">
      <p class="pt-7 pb-16 px-5 pl-7" v-if="props.isFeature">СВЕТЛОЕ БУДУЩЕЕ</p>
      <div v-else class="pt-5 pb-16 px-5">
        <a v-if="props.link !==''" :href="props.link" target="_blank"  class="hover:opacity-60">{{props.title}}</a>
        <p v-else >{{props.title}}</p>
        <div class="border-b border-2"></div>
        <p>{{props.subtitle}}</p>
      </div>
    </div>

  </div>

</template>

<script setup lang="ts">
const props = defineProps<{title: string, link: string, bgCard: string,subtitle: string, isFeature: boolean, isDown: boolean}>();
</script>

<style scoped>

</style>