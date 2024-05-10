<script setup>
import HeaderNav from "@/components/HeaderNav.vue";
import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <div class="flex flex-col h-screen ">
    <header-nav />

    <main class="flex-grow container max-w-7xl mx-auto max-sm:px-5 px-16 xl:px-0 pb-10 -mt-16 max-xl:mt-3">
      <router-view/>
    </main>
    <page-footer />

  </div>

</template>

<style scoped>

</style>
