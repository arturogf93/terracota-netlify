<template>
  <div class="mt-10" id="units-section">
    <section data-aos="fade-right">
      <h2 class="acaslon-pro-italic font-40 mb-4 font-weight-regular">
        Modelos_
      </h2>
    </section>
    <div>
      <v-card flat class="transition-1">
        <section data-aos="fade-up">
          <div
            class="my-10 text-right acaslon-pro-italic d-flex justify-center align-center"
            :class="{ 'font-25pt': $vuetify.breakpoint.mdAndUp, 'font-20pt': $vuetify.breakpoint.smAndDown }"
          >
            <div
              @click="unit_selected = 0"
              class="pointer"
              :class="unit_selected === 0 ? 'color-orange': 'color-not-selected'"
            >Ébano</div>
            <div class="units-line mx-3"></div>
            <div
              @click="unit_selected = 1"
              class="pointer"
              :class="unit_selected === 1 ? 'color-orange': 'color-not-selected'"
            >Jaspe</div>
            <div class="units-line mx-3"></div>
            <div
              @click="unit_selected = 2"
              class="pointer"
              :class="unit_selected === 2 ? 'color-orange': 'color-not-selected'"
            >Sienna</div>
          </div>
        </section>

        <v-card-text class="pa-0">
          <div data-aos="fade-up">
            <transition name="slide-fade" mode="out-in">
              <v-img
                :key="unit_selected"
                :src="units_details[unit_selected].image"
                :lazy-src="units_details[unit_selected].image"
                height="500"
              >
              </v-img>
            </transition>
          </div>
          <div class="mx-0 pa-sm-5">
            <transition name="slide-fade" mode="out-in">
              <v-container fluid class="ma-sm-0 pa-sm-0">
                <v-row :key="unit_selected">
                  <v-col cols="12" class="px-sm-8 pt-5 pb-0">
                    <p
                      class="font-40pt mb-0 line-height-normal gotham-light"
                      v-html="units_details[unit_selected].name"
                      data-aos="fade-right"
                    ></p>
                  </v-col>
                  <v-col
                    sm="4"
                    class="px-sm-8 pb-8 pt-0"
                    :class="{ 'border-white-right': $vuetify.breakpoint.smAndUp }"
                  >
                    <div class="gotham-book color-brown" data-aos="fade-up">
                      <p class="font-20 color-orange gotham-medium">{{ units_details[unit_selected].mts }}</p>

                      <p v-if="units_details[unit_selected].interior_mts" class="font-16  text-indent-10 mb-0">
                        Interior {{ units_details[unit_selected].interior_mts }}
                      </p>
                      <p v-if="units_details[unit_selected].exterior_mts" class="font-16  text-indent-10">
                        Exterior {{ units_details[unit_selected].exterior_mts }}
                      </p>

                      <p class="font-20 gotham-medium">Caracteristicas</p>
                      <div class="div-font-16 div-text-m0 text-indent-10">
                        <p
                          v-for="(characteristic, index) in units_details[unit_selected].characteristics"
                          :key="index"
                          class="gotham-book"
                        >{{ characteristic }}</p>
                        <p class="mt-2 acaslon-pro-italic">{{ units_details[unit_selected].note }}</p>
                      </div>
                    </div>
                  </v-col>
                  <v-col sm="8" class="py-0">
                    <v-row class="align-center px-30 py-0" data-aos="fade-up">
                      <v-col
                        cols="12" :sm="12 / Object.keys(units_details[unit_selected].models).length"
                        v-for="(item, key, index) in units_details[unit_selected].models"
                        :key="key"
                        class="py-0"
                      >
                        <v-img
                          :src="item"
                          :lazy-src="item"
                          max-height="500"
                          contain eager
                          width="100%"
                        ></v-img>
                        <div></div>
                        <div
                          v-show="$vuetify.breakpoint.xsOnly"
                          class="text-center gotham-book font-8pt"
                        >
                          {{ units_details[unit_selected].model_names[index] }}
                        </div>
                      </v-col>
                      <v-col cols="12"></v-col>
                      <v-col
                        v-show="$vuetify.breakpoint.smAndUp"
                        cols="12" :sm="12 / Object.keys(units_details[unit_selected].model_names).length"
                        class="text-center gotham-book font-8pt"
                        v-for="(item, i) in units_details[unit_selected].model_names"
                        :key="i"
                      >
                        {{ item }}
                      </v-col>
                    </v-row>
                  </v-col>
                </v-row>
              </v-container>
            </transition>
            <v-container>
              <v-row class="align-center justify-space-between">
                <v-col cols="12" sm="6">
                  <div class="font-12pt icon-links">
                    <div class="acaslon-pro-italic mb-1">Agenda una cita</div>
                    <div class="d-flex align-center mt-2">
                      <a :href="'https://wa.me/' + $config.whatsapp" aria-label="Whatsapp" class="mr-2 hover-scale" target="_blank" rel="noopener">
                        <v-icon>{{ mdiWhatsapp }}</v-icon>
                        <div class="link gotham-book">{{ $config.whatsapp_format }}</div>
                      </a>
                    </div>
                    <div class="d-flex align-center gotham-book mt-2">
                      <a href="mailto:info@terracotahomes.com" aria-label="Email" class="mr-2 hover-scale">
                        <v-icon>{{ mdiEmail }}</v-icon>
                        <span class="link ml-1">info@terracotahomes.com</span>
                      </a>
                    </div>
                  </div>
                </v-col>
                <v-col cols="12" sm="6" class="text-right text-sm-left">
                  <div class="d-md-flex text-left justify-end">
                    <a :href="'https://wa.me/' + $config.whatsapp" aria-label="Whatsapp" style="text-decoration: none" target="_blank" rel="noopener">
                      <v-btn
                        depressed tile
                        class="white--text font-10pt gotham-medium mr-10 mr-sm-0"
                        color="#d86742"
                        height="45"
                        width="220"
                        aria-label="Whatsapp"
                      >
                        <v-icon left>{{ mdiWhatsapp }}</v-icon>
                        CONTACTAR AGENTE
                      </v-btn>
                    </a>
                    <v-btn
                      depressed tile
                      class="white--text font-10pt gotham-medium ml-sm-5 mt-3 mt-md-0"
                      color="#d86742"
                      height="45"
                      width="200"
                      aria-label="Brochure"
                      @click="brochure_dialog = true"
                    >
                      OBTENER BROCHURE
                    </v-btn>
                  </div>
                </v-col>
              </v-row>
            </v-container>
          </div>
        </v-card-text>
      </v-card>
    </div>

    <!--Brochure dialog-->
    <v-dialog v-model="brochure_dialog" max-width="650">
      <v-card>
        <div class="close-btn">
          <v-btn icon aria-label="Cerrar" @click="brochure_dialog = false">
            <v-icon class="hover-scale">mdi-close</v-icon>
          </v-btn>
        </div>
        <v-card-text class="py-5 px-10">
          <div class="d-flex justify-center align-center">
            <div style="width: 100%" class="text-center">
              <v-img
                :src="require('../assets/images/logos/terracota-logo-black.png')"
                :lazy-src="require('../assets/images/logos/terracota-logo-black.png')"
                width="140"
                height="85"
                contain
                class="pa-5 ma-auto mb-5"
              ></v-img>
              <v-form
                ref="form"
                id="brochure-form"
                v-model="valid"
                lazy-validation
              >
                <v-text-field
                  v-model="form.name"
                  :rules="required_rules"
                  placeholder="Nombre"
                  required
                  solo flat
                  class="gotham-book"
                  color="#E16E49"
                ></v-text-field>

                <v-text-field
                  v-model="form.email"
                  :rules="email_rules"
                  placeholder="Correo"
                  require
                  solo flat
                  class="gotham-book"
                  color="#E16E49"
                ></v-text-field>

                <div class="font-13">
                  <v-checkbox
                    class="gotham-book"
                    label="Me gustaría recibir noticias, encuestas y ofertas especiales de Terracota Homes"
                    color="#E16E49"
                  ></v-checkbox>
                </div>

                <v-btn
                  color="#E16E49"
                  class="white--text px-10 mt-10 gotham-book"
                  @click="sendForm()"
                  depressed tile
                  height="45"
                  :loading="loading"
                  aria-label="Brochure"
                >
                  Obtener brochure
                </v-btn>
              </v-form>
              <v-alert v-show="sent === 1" text dense class="mt-3 gotham-book" color="#E16E49" type="success">
                Hemos enviado el brochure a tu cuenta de correo electrónico, revisa tu bandeja de entrada o spam.
              </v-alert>
              <v-alert v-show="sent === -1" text dense class="mt-3 gotham-book" color="red" type="error">
                Su mensaje no pudo ser enviado, favor de intentarlo mas tarde o mandar un correo a
                <span class="avenir-heavy"><a :href="`mailto:${ $config.email }`" target="_blank" rel="noopener">
              {{ $config.email }}
            </a></span>
              </v-alert>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import { mdiEmail, mdiWhatsapp, mdiClose } from '@mdi/js'
  export default {
    name: "Units",
    data: () => ({
      mdiEmail, mdiWhatsapp, mdiClose,
      valid: true,
      sent: 0,
      unit_dialog: false,
      brochure_dialog: false,
      units_carousel: 0,
      units: ['ÈBANO', 'JASPE', 'SIENNA'],
      unit_images: [
        require('../assets/images/units/Ebano.jpg'),
        require('../assets/images/units/Jaspe.jpg'),
        require('../assets/images/units/Sienna.jpg')
      ],
      unit_selected: 0,
      units_details: [
        {
          image: require('../assets/images/gallery/galeria-10.jpg'),
          background: '#F6F2E9',
          name: 'ÉBANO',
          mts: '124 m2',
          interior_mts: null,
          exterior_mts: null,
          characteristics: ['3 recámaras', '2 baños', '1 medio baño', 'Sala-comedor', 'Cocina', 'Lavandería', 'Jardín', 'Cochera para dos autos', 'Acceso a andador central*'],
          note: '*Sólo casas ubicadas en lotes centrales.',
          brochure: '',
          agent: '818181818',
          models: {
            landing_header: require('../assets/images/units/ebano-planta-baja.png'),
            landing_header_small: require('../assets/images/units/ebano-segunda-planta.png'),
          },
          model_names: [
            'PLANTA BAJA',
            'SEGUNDA PLANTA'
          ]
        },
        {
          image: require('../assets/images/units/Jaspe.jpg'),
          background: '#D8D6D0',
          name: 'JASPE <br> ROOF',
          mts: '160 m2',
          interior_mts: '130 m2',
          exterior_mts: '30 m2',
          characteristics: ['3 recámaras', '2 baños', '2 medio baño', 'Sala-comedor', 'Cocina', 'Lavandería', 'Jardín', 'Terraza', 'Cochera para dos autos', 'Acceso a andador central*'],
          note: '*Sólo casas ubicadas en lotes centrales.',
          brochure: '',
          agent: '818181818',
          models: {
            landing_header: require('../assets/images/units/jaspe-planta-baja.png'),
            landing_header_small: require('../assets/images/units/jaspe-segunda-planta.png'),
            landing_image: require('../assets/images/units/jaspe-rooftop.png')
          },
          model_names: [
            'PLANTA BAJA',
            'SEGUNDA PLANTA',
            'TERRAZA ROOFTOP'
          ]
        },
        {
          image: require('../assets/images/gallery/galeria-11.jpg'),
          background: '#ECDBBE',
          name: 'SIENNA <br> ROOF',
          mts: '179 m2',
          interior_mts: '143 m2',
          exterior_mts: '36 m2',
          characteristics: ['3 recámaras', '2 baños', '2 medio baño', 'Sala-comedor', 'Cocina', 'Lavandería', 'Jardín', 'Terraza', 'Cochera para dos autos', 'Acceso a andador central*'],
          note: '*Sólo casas ubicadas en lotes centrales.',
          brochure: '',
          agent: '818181818',
          models: {
            landing_header: require('../assets/images/units/sienna-planta-baja.png'),
            landing_header_small: require('../assets/images/units/sienna-segunda-planta.png'),
            landing_image: require('../assets/images/units/siena-rooftop.png')
          },
          model_names: [
            'PLANTA BAJA',
            'SEGUNDA PLANTA',
            'TERRAZA ROOFTOP'
          ]
        },
      ],
      unit_hover: 0,
      required_rules: [
        v => (!!v || v === 0) || ('Campo requerido')
      ],
      email_rules: [
        v => (!!v || v === 0) || ('Campo requerido'),
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || ('Correo invalido')
      ],
      form: {
        name: '',
        email: ''
      },
      loading: false
    }),
    methods: {
      async sendForm () {
        this.sent = 0
        if (!this.$refs.form.validate()) return false
        this.loading = true
        try {
          await this.$axios.post(this.$config.brochure_form, this.form)
          this.sent = 1
          this.loading = false
          this.notify()
        } catch (e) {
          this.loading = false
          this.sent = -1
        }
      },
      async notify () {
        try {
          await this.$axios.post(this.$config.notify_form, this.form)
          this.$refs.form.reset()
        } catch (e) {
          this.$refs.form.reset()
        }
      },
    }
  }
</script>

<style scoped>
@import '~/assets/css/index.css';
</style>
