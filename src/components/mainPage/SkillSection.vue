
<template>
  <section>
    <section-title title="Знания и навыки" />
    <div class="grid grid-cols-2 max-lg:grid-cols-1  gap-6 mb-5">
      <skill-card title="Применялось в работе">
        <div class="grid grid-cols-2 px-10 max-xs:grid-cols-1 max-sm:px-4">
          <ul class="list-disc">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>Git</li>
            <li>Vue 3</li>
          </ul>
          <ul class="list-disc pl-14 max-sm:px-0">
            <li>Quasar</li>
            <li>Tailwind</li>
            <li>PWA (serviceWorker)</li>
            <li>Websocket</li>
            <li>REST API</li>
          </ul>
        </div>
      </skill-card>

      <skill-card title="Изучалось, но не применялось в работе">
        <div class="px-10 max-sm:px-4">
          <ul class="list-disc ">
            <li>React</li>
            <li>Docker</li>
            <li>Vuex</li>
            <li>MySQL</li>
            <li>Express</li>
            <li>Jquery</li>
          </ul>
        </div>
      </skill-card>
    </div>
    <more-info-link link="/about-me" />
  </section>

</template>

<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import SkillCard from "@/components/mainPage/SkillCard.vue";
import MoreInfoLink from "@/components/MoreInfoLink.vue";
</script>

<style scoped>

</style>