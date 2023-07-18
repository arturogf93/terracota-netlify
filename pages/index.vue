<template>
  <div>
    <div class="pa-0" id="start-section">
      <div class="position-relative">
        <div class="carousel-controls-container font-20pt">
          <div class="carousel-controls">
            <div class="ml-5 acaslon-pro-italic text-shadow">
              <div
                @click="current_slide === 0 ? current_slide = landing_items.length - 1 : current_slide--"
                class="pointer hover-scale"
              >Anterior</div>
              <div class="carousel-line"></div>
              <div>{{ current_slide + 1 }} / 6</div>
              <div class="carousel-line"></div>
              <div
                @click="current_slide === landing_items.length ? current_slide = 0 : current_slide++"
                class="pointer hover-scale"
              >Siguiente</div>
            </div>
          </div>
        </div>

        <div class="virtual-tour">
          <div id="tour-container">
            <a href="http://www.zenics.mx/terracota360/" aria-label="Tour virtual" target="_blank" rel="noopener">
              <v-img
                :src="require('../assets/images/icons/tour-virtual.png')"
                :lazy-src="require('../assets/images/icons/tour-virtual.png')"
                width="80"
                height="80"
                contain
              ></v-img>
            </a>
            <div class="tour-circle" style="animation-delay: 0s"></div>
            <div class="tour-circle" style="animation-delay: 2s"></div>
            <div class="tour-circle" style="animation-delay: 4s"></div>
          </div>
        </div>
        <v-carousel
          ref="landingCarousel"
          id="landing-carousel"
          v-model="current_slide"
          :height="$vuetify.breakpoint.smAndUp ? '100vh' : '100vh'"
          cycle
          hide-delimiters
          :show-arrows="false"
        >
          <v-carousel-item
            v-for="i in 6"
            :key="i"
            reverse-transition="fade-transition"
            transition="fade-transition"
            eager
          >
            <v-img
              :src="require(`~/assets/images/home/home-${i - 1}.jpg`)"
              :lazy-src="require(`~/assets/images/home/home-${i - 1}.jpg`)"
              height="100%"
              eager
            >
            </v-img>
          </v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <v-container :class="$vuetify.breakpoint.xlOnly ? 'max-width-1400' : ''">
      <!--Information-->
      <v-row class="mt-sm-16">
        <v-col cols="12" sm="6">
          <section data-aos="fade-right">
            <p
              class="acaslon-pro-italic font-40"
            >En Terracota_</p>
          </section>
          <section data-aos="fade-up">
            <h1 class="gotham-book font-16 font-weight-regular mb-3">Disfruta de hacer ejercicio o dar un paseo al aire libre, el recorrido
              peatonal
              te llevará entre árboles y jardineras llenas de flores de temporada. Pasa una tarde divertida en la
              alberca
              o planea una parrillada con amigos y familiares. El área común, con asador y baños, está diseñada
              para la
              convivencia entre familia y vecinos.
            </h1>
          </section>
          <div class="pt-5">
            <section data-aos="fade-up">
              <ul class="gotham-book font-16 line-height-28"
                  :class="$vuetify.breakpoint.smAndUp ? 'two-column-list' : 'one-column-list'">
                <li>3,604 m2 de áreas recreativas</li>
                <li>Seguridad 24/7</li>
                <li>Dos albercas</li>
                <li>Andador central</li>
                <li>Terraza con asadores</li>
                <li>Baños y vestidores</li>
                <li>Fogatero</li>
                <li>Juegos infantiles</li>
                <li>Fuente interactiva para niños</li>
              </ul>
            </section>
          </div>
        </v-col>
        <v-col cols="12" sm="6" class="position-relative">
          <section data-aos="fade-up">
            <v-img
              :src="require('../assets/images/description/desc-1.jpg')"
              :lazy-src="require('../assets/images/description/desc-1.jpg')"
              class="ma-auto"
              cover
              height="388"
              :width="$vuetify.breakpoint.smAndUp ? '350px' : '300px'"
            ></v-img>
          </section>
          <section data-aos="fade-up" data-aos-delay="600" class="overlap-image">
            <v-img
              v-rellax="{speed: 1}"
              :src="require('../assets/images/description/desc-2.png')"
              :lazy-src="require('../assets/images/description/desc-2.png')"
              height="388"
              :width="$vuetify.breakpoint.smAndUp ? '350px' : '300px'"
            ></v-img>
          </section>
        </v-col>
      </v-row>

      <!-- Amenidades -->
      <div style="margin-top: 100px;">
        <amenities></amenities>
      </div>

      <!-- Unidades -->
      <units></units>

      <!-- Master plan -->
      <master-plan></master-plan>

      <!-- Ubicación -->
      <location></location>

      <!-- Galeria -->
      <gallery></gallery>

      <!-- Contacto -->
      <contact-form></contact-form>
    </v-container>
    <social />
  </div>
</template>

<script>
export default {
  name: 'home',
  scrollToTop: true,
  components: {},
  data () {
    return {
      current_slide: 0,
      landing_items: [
        { src: require('../assets/images/home/home-0.jpg')},
        { src: require('../assets/images/home/home-1.jpg')},
        { src: require('../assets/images/home/home-2.jpg')},
        { src: require('../assets/images/home/home-3.jpg')},
        { src: require('../assets/images/home/home-4.jpg')},
        { src: require('../assets/images/home/home-5.jpg')},
      ]
    }
  },
  head: {
    titleTemplate: 'Terracota San Miguel de Allende'
  }
}
</script>
<style scoped>
@import '~/assets/css/index.css';
</style>
