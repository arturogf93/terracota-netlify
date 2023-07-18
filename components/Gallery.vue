<template>
  <div>
    <section class="mt-16" data-aos="fade-up">
      <v-row>
        <v-col>
          <div class="image-text-container" @click="index = 0">
            <v-img
              :src="require('../assets/images/gallery/galeria-10.jpg')"
              :lazy-src="require('../assets/images/gallery/galeria-10.jpg')"
              class="ma-auto pointer"
              height="500px"
            ></v-img>
            <div class="centered text-shadow">
              <h2
                data-aos="fade-up"
                class="acaslon-pro-italic font-40pt pointer font-weight-regular"
              >
                Galería_
              </h2>
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                class="gotham-bold font-20pt text-border-long ma-auto pointer hover-scale"
                style="max-width: 200px">
                VER MÁS
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </section>

    <client-only>
      <Tinybox
        v-model="index"
        :images="gallery_items"
        loop
      />
    </client-only>
  </div>
</template>

<script>
  import Tinybox from "vue-tinybox";
  export default {
    name: "Gallery",
    components: { Tinybox },
    data: () => ({
      index: null,
      gallery_items: [
        require('../assets/images/gallery/galeria-1.jpg'),
        require('../assets/images/gallery/galeria-2.jpg'),
        require('../assets/images/gallery/galeria-3.jpg'),
        require('../assets/images/gallery/galeria-4.jpg'),
        require('../assets/images/gallery/galeria-5.jpg'),
        // require('../assets/images/gallery/galeria-6.jpg'),
        require('../assets/images/gallery/galeria-7.jpg'),
        require('../assets/images/gallery/galeria-8.jpg'),
        require('../assets/images/gallery/galeria-9.jpg'),
        require('../assets/images/gallery/galeria-10.jpg'),
        require('../assets/images/gallery/galeria-11.jpg'),
        require('../assets/images/gallery/galeria-12.jpg'),
      ]
    })
  }
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>
