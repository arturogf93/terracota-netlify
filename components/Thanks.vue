<template>
  <div>
    <p
      class="primary--text avenir-heavy"
      :class="$vuetify.breakpoint.smAndUp ? 'font-70pt line-70pt' : 'font-50pt line-50pt'"
    >
      A un <br> paso de <br> la casa de <br> tus sueños.
    </p>
    <p class="avenir mt-12 font-14pt">
      ¡Muy pronto uno de nuestros asesores se comunicara contigo!
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
