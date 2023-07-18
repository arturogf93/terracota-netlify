<template>
  <div id="amenities-section">
    <div data-aos="fade-right">
      <h2 class="acaslon-pro-italic font-40 mb-4 font-weight-regular">
        Amenidades_
      </h2>
    </div>
    <section data-aos="fade-up">
      <div class="position-relative">
      <div class="carousel-controls-container">
        <div class="carousel-logo">
          <div class="ma-3">
            <v-img
              width="30"
              height="30"
              contain
              :src="icon"
              :lazy-src="icon"
            ></v-img>
          </div>
        </div>
      </div>
      <div class="carousel-controls-container font-20pt">
        <div class="carousel-controls">
          <div class="ml-5 acaslon-pro-italic text-shadow">
            <div
              @click="current_slide === 0 ? current_slide = amenities_items.length - 1 : current_slide--"
              class="pointer hover-scale"
            >Anterior</div>
            <div class="carousel-line"></div>
            <div>{{ current_slide + 1 }} / {{ amenities_items.length }}</div>
            <div class="carousel-line"></div>
            <div
              @click="current_slide === amenities_items.length ? current_slide = 0 : current_slide++"
              class="pointer hover-scale"
            >Siguiente</div>
          </div>
        </div>
      </div>
      <v-carousel
        v-model="current_slide"
        :height="$vuetify.breakpoint.xl ? 600 : 500"
        cycle
        hide-delimiters
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="(item,i) in amenities_items"
          :key="i"
          :src="item.src"
          :lazy-src="item.lazy"
          reverse-transition="fade-transition"
          transition="fade-transition"
          eager
        >
          <div class="carousel-name">
            <div class="ma-5 gotham-book" :class="{ 'font-12': $vuetify.breakpoint.xsOnly }">
              {{ item.name }}
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Amenities",
    data () {
      return {
        current_slide: 0,
        amenities_carousel: 0,
        icon: require('../assets/images/icon.png'),
        amenities_items: [
          { src: require('../assets/images/home/home-2.jpg'), lazy: require('../assets/images/home/home-2.jpg'), name: 'ANDADOR CENTRAL' },
          { src: require('../assets/images/ammenities/am-3.jpg'), lazy: require('../assets/images/ammenities/am-3-lazy.jpg'), name: 'ALBERCA' },
          { src: require('../assets/images/ammenities/am-4.jpg'), lazy: require('../assets/images/ammenities/am-4-lazy.jpg'), name: 'ÁREA DE ASADORES Y FOGATERO' },
          { src: require('../assets/images/ammenities/am-5.jpg'), lazy: require('../assets/images/ammenities/am-5-lazy.jpg'), name: 'JUEGOS INFANTILES' },
          { src: require('../assets/images/home/home-0.jpg'), lazy: require('../assets/images/home/home-0.jpg'), name: 'CASETA DE SEGURIDAD' },
          { src: require('../assets/images/ammenities/am-6.jpg'), lazy: require('../assets/images/ammenities/am-6-lazy.jpg'), name: 'ALBERCA' },
          // { src: require('../assets/images/ammenities/am-6.jpg'), lazy: require('../assets/images/ammenities/am-6-lazy.jpg'), name: 'ALBERCA' },
        ]
      }
    }
  }
</script>

<style scoped>
  @import '~/assets/css/index.css';
  .carousel-name {
    bottom: 0;
    color: #fff;
    position: absolute;
  }
</style>
