<template>
  <div id="models" class="grey-background">
    <v-container :fluid="$vuetify.breakpoint.mdAndDown" class="px-6 px-sm-12 pb-12">
      <v-row class="mt-6">
        <v-col cols="12">
          <p class="font-30pt a-caslon">Modelos_</p>
        </v-col>
        <v-col cols="12">
          <div
            v-for="(model, model_index) in models"
            :key="model_index"
          >
            <div class="d-flex align-center justify-sm-center mb-4 mb-sm-8">
              <div
                v-for="(variant, variant_index) in model.variants"
                :key="variant_index"
                class="a-caslon font-30pt clickable variant d-flex align-center"
                :class="model.selected === variant_index ? 'selected' : ''"
                @click="model.selected = variant_index"
              >
                <h1 class="font-xs-18pt" :class="$vuetify.breakpoint.lgAndUp ? 'font-30pt' : 'font-24pt'">
                  {{ variant.name }}
                </h1>
                <div v-if="variant_index + 1 !== model.variants.length" class="line" />
              </div>
            </div>
            <v-row class="py-3 py-sm-12 align-center">
              <v-col cols="12" md="6">
                <div class="d-sm-flex align-center">
                  <h1
                    class="model-title li"
                    :class="$vuetify.breakpoint.lgAndUp ? 'font-40pt line-40pt' : 'font-30pt line-30pt'"
                    v-html="model.variants[model.selected].title"
                  ></h1>
                  <div class="ml-sm-6 ml-md-16 mt-6 mt-sm-0">
                    <p class="gotham-medium primary--text">{{ model.variants[model.selected].meters }}</p>
                    <p v-show="model.variants[model.selected].interior" class="gotham-book secondary--text">Interior: {{ model.variants[model.selected].interior }}</p>
                    <p v-show="model.variants[model.selected].exterior" class="gotham-book secondary--text">Exterior: {{ model.variants[model.selected].exterior }}</p>
                  </div>
                </div>
              </v-col>
              <v-col v-if="$vuetify.breakpoint.mdAndUp || $vuetify.breakpoint.xsOnly" cols="12" md="6">
                <div class="d-sm-flex justify-sm-end">
                  <div>
                    <v-btn
                      depressed tile
                      class="avenir-black mb-3 mb-sm-0 mr-3 mr-sm-0"
                      :class="$vuetify.breakpoint.smAndUp ? 'font-11pt' : 'font-9pt'"
                      color="primary"
                      height="45"
                      width="200"
                      aria-label="Brochure"
                      @click="$refs.contact.show = true"
                    >
                      HABLAR CON ASESOR
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
                      depressed tile
                      class="avenir-black ml-sm-3"
                      :class="$vuetify.breakpoint.smAndUp ? 'font-11pt' : 'font-9pt'"
                      color="primary"
                      height="45"
                      width="200"
                      aria-label="Brochure"
                      @click="$refs.brochure.show = true"
                    >
                      OBTENER BROCHURE
                    </v-btn>
                  </div>
                </div>
              </v-col>
            </v-row>
            <v-divider></v-divider>
            <v-row class="mt-2 mt-sm-12">
              <v-col cols="12" sm="8" md="4">
                <p class="gotham-medium font-18pt secondary--text">
                  CARACTERISTICAS
                </p>
                <div class="gotham-book secondary--text ml-3 mt-3">
                  <p
                    v-for="(characteristic, c) in model.variants[model.selected].characteristics"
                    :key="c"
                    class="font-15pt"
                  >
                    {{ characteristic }}
                  </p>
                  <p class="mt-6">*Sólo casas ubicadas en lotes centrales.</p>
                </div>
              </v-col>
              <v-col v-if="$vuetify.breakpoint.smOnly" cols="4" class="d-flex align-center justify-center">
                <div>
                  <div>
                    <v-btn
                      depressed tile
                      class="font-11pt avenir-black mb-3"
                      color="primary"
                      height="45"
                      width="200"
                      aria-label="Brochure"
                      @click="$refs.contact.show = true"
                    >
                      HABLAR CON ASESOR
                    </v-btn>
                  </div>
                  <div>
                    <v-btn
                      depressed tile
                      class="font-11pt avenir-black"
                      color="primary"
                      height="45"
                      width="200"
                      aria-label="Brochure"
                      @click="$refs.brochure.show = true"
                    >
                      OBTENER BROCHURE
                    </v-btn>
                  </div>
                </div>
              </v-col>
              <v-col v-if="$vuetify.breakpoint.smAndUp" cols="12" sm="12" md="8" class="d-flex">
                <div
                  v-for="(image, i) in model.variants[model.selected].images"
                  :key="i"
                  class="ml-6"
                >
                  <img
                    :src="image.url"
                    :alt="model.variants[model.selected].title"
                    width="100%"
                    height="100%"
                    style="max-height: 500px; object-fit: contain"
                  />
                  <div class="text-center gotham-book" style="color: #7b6756">
                    {{ image.text }}
                  </div>
                </div>
              </v-col>
              <v-col v-if="$vuetify.breakpoint.xsOnly" cols="12">
                <v-carousel hide-delimiter-background hide-delimiters>
                  <v-carousel-item
                    v-for="(image, i) in model.variants[model.selected].images"
                    :key="i"
                  >
                    <v-img>
                      <img
                        :src="image.url"
                        :alt="model.variants[model.selected].title"
                        width="100%"
                        style="max-height: 470px; object-fit: contain"
                      />
                      <div class="text-center gotham-book" style="color: #7b6756">
                        {{ image.text }}
                      </div>
                    </v-img>
                  </v-carousel-item>
                </v-carousel>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>

    <contact-dialog ref="contact" />
    <brochure-dialog ref="brochure" />
  </div>
</template>

<script>
export default {
  name: "Models",
  data: () => ({
    models: [
      {
        selected: 0,
        variants: [
          {
            name: 'Ébano',
            title: 'ÉBANO',
            meters: '124 m²',
            interior: null,
            exterior: null,
            characteristics: ['3 recámaras', '2 baños', '1 medio baño', 'Sala-comedor', 'Cocina', 'Lavandería', 'Jardín', 'Cochera para dos autos', 'Acceso a andador central*'],
            images: [
              {
                url: require('~/assets/images/models/ebano-planta-baja.png'),
                text: 'PLANTA BAJA'
              },
              {
                url: require('~/assets/images/models/ebano-segunda-planta.png'),
                text: 'SEGUNDA BAJA'
              }
            ]
          },
          {
            name: 'Jaspe',
            title: 'JASPE <br> ROOF',
            meters: '160 m²',
            interior: '130 m²',
            exterior: '30 m²',
            characteristics: ['3 recámaras', '2 baños', '2 medio baño', 'Sala-comedor', 'Cocina', 'Lavandería', 'Jardín', 'Terraza', 'Cochera para dos autos', 'Acceso a andador central*'],
            images: [
              {
                url: require('~/assets/images/models/jaspe-planta-baja.png'),
                text: 'PLANTA BAJA'
              },
              {
                url: require('~/assets/images/models/jaspe-segunda-planta.png'),
                text: 'SEGUNDA BAJA'
              },
              {
                url: require('~/assets/images/models/jaspe-rooftop.png'),
                text: 'ROOFTOP'
              }
            ]
          },
          {
            name: 'Sienna',
            title: 'SIENNA <br> ROOF',
            meters: '179 m²',
            interior: '143m²',
            exterior: '36m²',
            characteristics: ['3 recámaras', '2 baños', '2 medio baño', 'Sala-comedor', 'Cocina', 'Lavandería', 'Jardín', 'Terraza', 'Cochera para dos autos', 'Acceso a andador central*'],
            images: [
              {
                url: require('~/assets/images/models/sienna-planta-baja.png'),
                text: 'PLANTA BAJA'
              },
              {
                url: require('~/assets/images/models/sienna-segunda-planta.png'),
                text: 'SEGUNDA BAJA'
              },
              {
                url: require('~/assets/images/models/siena-rooftop.png'),
                text: 'ROOFTOP'
              }
            ]
          }
        ]
      }
    ],
    contact_dialog: false,
  })
}
</script>

<style scoped>
@import '~/assets/css/style.css';
.line {
  background-color: #9c9b9b;
  width: 70px;
  height: 1px;
  margin: 0 32px;
}
.variant {color: #9c9b9b;}
.selected {color: #e16e49;}
.carousel-caption {
  position: absolute;
  bottom: 0;
}
@media screen and (max-width: 600px) {
  .line {
    width: 20px;
    margin: 0 12px;
  }
}
@media screen and (max-width: 320px) {
  .font-xs-18pt {
    font-size: 18pt;
  }
}
</style>
