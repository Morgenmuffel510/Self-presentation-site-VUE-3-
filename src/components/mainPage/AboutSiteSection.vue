
<template>
  <section>
    <section-title title="Об этом сайте" />
    <p class="mb-7">
      Данный сайт написан на Vue 3,  аналогичный сайт на React можно посмотреть
      <a href="#" target="_blank" class="text-text-link hover:opacity-60 font-bold">здесь</a>.
    </p>
    <site-option-card title="Vue" class="mb-10">
      <p>Сайт написан на Vue 3</p>
      <p>Vue router - в случае данного сайта использован плагин unplugin, который позволяет строить роутинг исходя из
        файловой структуры проекта.</p>
    </site-option-card>
    <site-option-card title="Код">
      <p>Сайт написан на Typescript</p>
      <p >
        Для стилей использован фреймворк
        <a href="https://tailwindcss.com" target="_blank" class="text-text-link hover:opacity-60 font-bold">Tailwind</a>.
      </p>
    </site-option-card>
  </section>

</template>

<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import SiteOptionCard from "@/components/mainPage/SiteOptionCard.vue";
</script>


<style scoped>

</style>