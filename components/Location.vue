<template>
  <div id="location-section" class="mt-16">
    <section data-aos="fade-right">
      <v-row>
        <v-col cols="12">
          <h2 class="acaslon-pro-italic font-40 mb-4 font-weight-regular">Ubicación_</h2>
        </v-col>
      </v-row>
    </section>
    <section data-aos="fade-up">
      <v-carousel
        v-model="location_carousel"
        hide-delimiters
        :show-arrows="false"
        :height="$vuetify.breakpoint.smAndUp ? '500px' : '800px'"
        :interval="10000"
        cycle
      >
        <!--1-->
        <v-carousel-item>
          <v-row class="black--text mx-0 mx-sm-5">
            <v-col cols="12" sm="6">
              <p
                class="location-title mb-0 font-30 gotham-light"
                :class="{ 'position-absolute': $vuetify.breakpoint.mdAndUp }"
              >
                SAN MIGUEL <br> <span class="text-border">DE ALLENDE</span>
              </p>
              <div class="mt-md-0 mt-3" :class="{ 'd-flex align-center h-100': $vuetify.breakpoint.mdAndUp }">
                <p
                  class="location-text gotham-book font-16"
                  style="white-space: pre-line"
                  :class="{ 'text-justify': $vuetify.breakpoint.smAndUp }"
                >
                  Recientemente nombrado Patrimonio de la Humanidad por la UNESCO, la historia de San Miguel de Allende data de 1542, época en la que fue un punto importante en el comercio de la plata.
                  Su arquitectura colonial ha enoramorado a muchos y sus galerías y variadas tiendas entretienen durante horas. La mezcla cultural del pueblo ha dado pie a una rica gastronomía, desde puestos callejeros hasta restaurantes gourmet.
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                :src="require('../assets/images/location/location-2.jpg')"
                :lazy-src="require('../assets/images/location/location-2.jpg')"
                class="ma-auto"
                height="500px"
                :class="{ 'mt-5': $vuetify.breakpoint.xsOnly }"
                position="bottom right"
              ></v-img>
            </v-col>
          </v-row>
        </v-carousel-item>

        <!--2-->
        <v-carousel-item>
          <v-row class="black--text mx-0 mx-sm-5">
            <v-col cols="12" sm="6">
              <p
                class="location-title mb-0 font-30 gotham-light"
                :class="{ 'position-absolute': $vuetify.breakpoint.mdAndUp }"
              >
                <span class="text-border">ALREDEDOR</span>
              </p>
              <div class="mt-md-0 mt-3" :class="{ 'd-flex align-center h-100': $vuetify.breakpoint.mdAndUp }">
                <p
                  class="location-text gotham-book font-16"
                  :class="{ 'text-justify': $vuetify.breakpoint.smAndUp }"
                >
                  A escasos minutos del centro de San Miguel de Allende.
                  <br><br>
                  A 30 minutos de la ciudad de Querétaro.
                  <br><br>
                  Totalmente comunicado con los aeropuertos internacionales de Ciudad de México, Querétaro y Bajío.
                  <br><br>
                  Ubicado sobre la carretera Querétaro- San Miguel de Allende por la cuál entra el 80% de los visitantes de San Miguel. México, Querétaro y Bajío.
                </p>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                :src="require('../assets/images/location/location-1.jpg')"
                :lazy-src="require('../assets/images/location/location-1.jpg')"
                class="ma-auto"
                height="500px"
                :class="{ 'mt-5': $vuetify.breakpoint.xsOnly }"
                position="bottom right"
              ></v-img>
            </v-col>
          </v-row>
        </v-carousel-item>

        <!--3-->
        <v-carousel-item>
          <v-row class="black--text mx-0 mx-sm-5">
            <v-col cols="12" sm="6">
              <p
                class="location-title mb-0 font-30 gotham-light"
                :class="{ 'position-absolute': $vuetify.breakpoint.mdAndUp }"
              >
                <span class="text-border">ZIRÁNDANO</span>
              </p>
              <div class="mt-md-0 mt-3" :class="{ 'd-flex align-center h-100': $vuetify.breakpoint.mdAndUp }">
                <div>
                  <p
                    class="location-text gotham-book font-16"
                    style="white-space: pre-line"
                    :class="{ 'text-justify': $vuetify.breakpoint.smAndUp }"
                  >
                    Terracota Homes cuenta con 123 lotes que te entregan lo mejor de ambos mundos, un vecindario cálido y las amenidades de clase mundial de Zirándaro: golf, compras, par- ques, hotel y club privado; tiene algo para todos.
                  </p>
                  <p class="gotham-medium font-16">LO QUE TE OFRECE ZIRÁNDANO</p>
                  <ul class="gotham-book font-16 line-height-28">
                    <li>Academia de Golf de Rafael Alarcón</li>
                    <li>Campo de golf ejecutivo de 9 hoyos diseñado por Morrish Alarcón y Stoddard</li>
                    <li>Parques diseñados por Michael Mckay</li>
                    <li>Casa club y deportiva diseñada por el Arquitecto Humberto Artigas</li>
                    <li>Club de Vino</li>
                  </ul>
                </div>
              </div>
            </v-col>
            <v-col cols="12" sm="6">
              <v-img
                :src="require('../assets/images/location/location-3.jpg')"
                :lazy-src="require('../assets/images/location/location-3.jpg')"
                class="ma-auto"
                height="500px"
                :class="{ 'mt-5': $vuetify.breakpoint.xsOnly }"
                position="bottom right"
              ></v-img>
            </v-col>
          </v-row>
        </v-carousel-item>

      </v-carousel>
    </section>
    <section data-aos="fade-up">
      <div class="acaslon-pro-italic d-flex justify-space-between align-center mt-3 font-20pt">
        <div @click="location_carousel--" class="pointer hover-scale">Anterior</div>
        <div>{{ location_carousel + 1 }} / {{ locations.length }}</div>
        <div @click="location_carousel++" class="pointer hover-scale">Siguiente</div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "Location",
    data: () => ({
      location_carousel: 0,
      locations: [
        {
          image: require('../assets/images/location/location-2.jpg'),
          title: 'SAN MIGUEL <br> <span class="text-border">DE ALLENDE</span>',
          text: 'Recientemente nombrado Patrimonio de la Humanidad por la UNESCO, la historia de San Miguel de Allende data de 1542, época en la que fue un punto importante en el comercio de la plata.\n' +
            'Su arquitectura colonial ha enoramorado a muchos y sus galerías y variadas tiendas entretienen durante horas. La mezcla cultural del pueblo ha dado pie a una rica gastronomía, desde puestos callejeros hasta restaurantes gourmet.\n'
        },
        {
          image: require('../assets/images/location/location-1.jpg'),
          title: '<span class="text-border">ALREDEDOR</span>',
          text: 'A escasos minutos del centro de San Miguel de Allende.\n' +
            '\n' +
            'A 30 minutos de la ciudad de Querétaro.\n' +
            '\n' +
            'Totalmente comunicado con los aeropuertos internacionales de Ciudad de México, Querétaro y Bajío.\n' +
            '\n' +
            'Ubicado sobre la carretera Querétaro- San Miguel de Allende por la cuál entra el 80% de los visitantes de San Miguel. México, Querétaro y Bajío.\n'
        },
        {
          image: require('../assets/images/location/location-3.jpg'),
          title: '<span class="text-border">ZIRANDANO</span>',
          text: ''
        },
      ]
    })
  }
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>
