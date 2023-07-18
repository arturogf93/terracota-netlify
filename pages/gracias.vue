<template>
  <v-container class="px-6 px-sm-12">
    <NuxtLink to="/" class="hidden-xs-only">
      <!--<img-->
      <!--  data-aos="fade-right" data-aos-delay="300"-->
      <!--  id="acacia"-->
      <!--  src="~/assets/images/icons/acacia.svg"-->
      <!--  width="55" height="200"-->
      <!--  alt="acacia"-->
      <!--&gt;-->
    </NuxtLink>
    <!--<div style="position: absolute">-->
    <!--  <v-btn @click="contact = !contact">test</v-btn>-->
    <!--  {{ contact }}-->
    <!--</div>-->
    <v-row class="fill-height align-center justify-center h-100vh">
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="contact ? 'Contact' : 'Thanks'"></component>
      </transition>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "gracias",
  data: () => ({
    contact: false
  }),
  mounted () {
    if (process.client) {
      if (window.fbq) window.fbq('track', 'CompleteRegistration');
      if (window.gtag) window.gtag('event', 'conversion', {'send_to': 'AW-319660902/HnMxCNqwjOYCEObGtpgB'});
    }
    const vm = this
    setTimeout(function () {
      vm.contact = true
    }, 5000)
  }
}
</script>

<style scoped>
  @import '~/assets/css/style.css';
  .component-fade-enter-active, .component-fade-leave-active {
    transition: opacity .3s ease;
  }
  .component-fade-enter, .component-fade-leave-to
    /* .component-fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
