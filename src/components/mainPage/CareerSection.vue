
<template>
  <section>
    <section-title title="Карьера" />
    <p>
      Моя карьера началась в сфере логистики в 2013 году и до 2021 года развивалась в этом направлении.
      Затем я приняла решение сменить сферу деятельности.
    </p>
    <p class="pb-5">
       С 2021 по 2022 год я изучала web-разработку, после чего,
      получила свою первую работу по новой специальности в компании  “РИНЭК” (она же ‘’Метрология-Комплект”).
    </p>
    <div class="relative mb-5">

      <div class="absolute top-[61.5%] left-[7.5%]">
        <career-mini-card :is-down="false"
                          title="ООО 'СТАНДАРД'"
                          subtitle="2013-2016 г."
                          link=""
                          bg-card="/images/career/logistic-up.png"
                          :is-feature="false"  />
        <career-point class="ml-7 mt-2" />
      </div>
      <div class="absolute top-[71.6%] left-[28%]">
        <career-point class="ml-8 mb-2" />
        <career-mini-card :is-down="true"
                          title="ООО “Мэйджор Карго Сервис”"
                          subtitle="2016-2019 г."
                          link="https://mjr.ru"
                          bg-card="/images/career/logistic-down.png"
                          :is-feature="false" />
      </div>
      <div class="absolute top-[49%] left-[45%]">
        <career-point class="ml-8 mb-2" />
        <career-mini-card :is-down="true"
                          title="ООО “НАВИНИЯ РУС”"
                          subtitle="2019-2021 г."
                          link="https://nawinia.com"
                          bg-card="/images/career/logistic-down.png"
                          :is-feature="false" />
      </div>

      <div class="absolute top-[9.6%] left-[40%]">
        <career-mini-card :is-down="false"
                          title="АО “РИНЭК” (Метрология-Комплект)"
                          subtitle="2022 по н.вр."
                          link="https://metr-k.ru"
                          bg-card="/images/career/it.png"
                          :is-feature="false"  />
        <career-point class="ml-[19.7rem] mt-2" />
      </div>

      <div class="absolute top-[1%] left-[80%]">
        <career-mini-card :is-down="false"
                          title=""
                          subtitle=""
                          link=""
                          bg-card="/images/career/feature.png"
                          :is-feature="true"  />

        <img src="/images/career/polygon.png" class="ml-9 mt-3"/>
      </div>

      <img src="/images/career/career-bg.png" alt="Карьера-диограмма">
    </div>
    <more-info-link link="/about-me" />
  </section>

</template>

<script setup lang="ts">

import SectionTitle from "@/components/SectionTitle.vue";
import CareerPoint from "@/components/mainPage/CareerPoint.vue";
import CareerMiniCard from "@/components/mainPage/CareerMiniCard.vue";
import MoreInfoLink from "@/components/MoreInfoLink.vue";
</script>

<style scoped>

</style>