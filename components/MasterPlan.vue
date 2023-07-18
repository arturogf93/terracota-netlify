<template>
  <div class="mt-10" id="master-plan-section">
    <section data-aos="fade-right">
      <p class="acaslon-pro-italic font-40">Master Plan_</p>
    </section>
    <section data-aos="fade-up">
      <div style="position: relative">
        <v-img
          v-show="$vuetify.breakpoint.smAndUp"
          :src="compass"
          :lazy-src="compass"
          class="compass-image"
          :height="$vuetify.breakpoint.smAndUp ? '80' : '50'"
          contain
        ></v-img>
        <v-img
          :src="master_plan"
          :lazy-src="master_plan_lazy"
          class="ma-auto"
          :height="$vuetify.breakpoint.smAndUp ? '500' : '250'"
          contain eager
        ></v-img>
      </div>
    </section>
    <section data-aos="fade-up">
      <div class="acaslon-pro-italic">
        4 Etapas
        <div class="vertical-line"></div>
        123 casas
        <div class="vertical-line"></div>
        3 Modelos de 124 - 178m2
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "MasterPlan",
    data: () => ({
      compass: require('../assets/images/compass.png'),
      master_plan: require('../assets/images/master-plan.png'),
      master_plan_lazy: require('../assets/images/master-plan-lazy.png')
    })
  }
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>
