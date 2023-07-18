<template>
  <div>
    <p
      class="primary--text avenir-heavy"
      :class="$vuetify.breakpoint.smAndUp ? 'font-70pt line-70pt' : 'font-50pt line-50pt'"
    >
      Con gusto <br> atendemos <br> tu llamada.
    </p>
    <v-row class="avenir align-center mt-8">
      <v-col cols="12" md="6">
        <p class="primary--text avenir-black">Tel.</p>
        <div>
          <a href="tel:+524151471516">
            <p>+52 (415) 147 1516</p>
          </a>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <a href="https://terracotahomes.com/" target="_blank">
          <v-btn
            depressed tile
            class="white--text"
            color="primary"
            height="37"
          >
            <span class="font-11pt gotham-bold ls-i">Visitar sitio</span>
          </v-btn>
        </a>
      </v-col>
    </v-row>
    <p class="avenir mt-12 font-14pt">
      Cerrada Juan O´Gorman s/n, Fracc. Zirándaro, <br class="hidden-xs-only"> San Miguel de Allende
    </p>
  </div>
</template>

<script>
export default {
  name: "Thanks"
}
</script>

<style scoped>
@import '~/assets/css/style.css';
</style>
