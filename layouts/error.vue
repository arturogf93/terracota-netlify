<template>
  <div>
    <div class="d-flex align-center justify-center" style="height: 60vh;">
      <div>
        <v-img
          :src="require('~/assets/images/logos/logo.svg')"
          contain
          width="200"
          class="ma-auto mb-3"
          style="filter: drop-shadow(rgba(0, 0, 0, 2) 0.3px 0.2px 1px);"
        ></v-img>
        <div class="text-center">
          <div class="my-6">
            <h1 v-if="error.statusCode === 404">
              {{ pageNotFound }}
            </h1>
            <h1 v-else>
              {{ otherError }}
            </h1>
          </div>
          <div class="mt-3">
            <NuxtLink v-if="$route.name !== 'index'" to="/">
              <v-btn depressed color="primary" class="avenir-black white--text">
                Regresar a inicio
              </v-btn>
            </NuxtLink>
            <a
              v-else
              @click="$router.go({path:'/', force: true})"
            >
              <v-btn depressed color="primary" class="avenir-black white--text">
                Regresar a inicio
              </v-btn>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: 'Página no encontrada',
      otherError: 'Ocurrio un error'
    }
  },
  head () {
    const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
