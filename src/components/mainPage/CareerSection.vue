
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
    <div class="bg-career bg-cover bg-no-repeat mb-3 relative">


      <div class="grid grid-cols-1 gap-6  py-10 px-9">
        <p class="text-white text-6xl max-sm:text-4xl opacity-60 text-start">IT</p>
        <p class="text-center">
          СВЕТЛОЕ БУДУЩЕЕ
        </p>
        <div class="flex flex-row justify-center">
          <div class="w-[2px] h-10 bg-white"></div>
        </div>
        <career-mini-card title="АО “РИНЭК” (Метрология-Комплект)"
                          bg-color="bg-[#8F8371]"
                          subtitle="2022 по н.вр."
                          link="https://metr-k.ru"
                          class="w-1/3 m-auto max-lg:w-2/3 max-xs:w-full"/>
        <div class="flex flex-row justify-center">
          <div class="w-[2px] h-10 bg-white"></div>
        </div>
        <career-mini-card title="ООО “НАВИНИЯ РУС”"
                          bg-color="bg-[#615A50]"
                          subtitle="2019-2021 г."
                          link="https://nawinia.com"
                          class="w-1/3 m-auto max-lg:w-2/3 max-xs:w-full" />
        <div class="flex flex-row justify-center">
          <div class="w-[2px] h-10 bg-white"></div>
        </div>
        <career-mini-card title="ООО “Мэйджор Карго Сервис”"
                          bg-color="bg-[#615A50]"
                          subtitle="2016-2019 г."
                          link="https://mjr.ru"
                          class="w-1/3 m-auto max-lg:w-2/3 max-xs:w-full" />
        <div class="flex flex-row justify-center">
          <div class="w-[2px] h-10 bg-white"></div>
        </div>
        <career-mini-card   title="ООО 'СТАНДАРД'"
                            bg-color="bg-[#615A50]"
                            subtitle="2013-2016 г."
                            link=""
                            class="w-1/3 m-auto  max-lg:w-2/3 max-xs:w-full"/>
        <p class="text-white text-6xl opacity-60 text-end max-sm:text-4xl">Логистика</p>
      </div>
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