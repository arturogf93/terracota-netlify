<template>
<div id="start-section">
  <!-- HEADER -->
    <v-img :src="require('~/assets/images/banner.jpg')" :lazy-src="require('~/assets/images/banner.jpg')" class="header-image overflow-visible">
      <!--<img-->
      <!--  data-aos="fade-right" data-aos-delay="600"-->
      <!--  id="acacia"-->
      <!--  src="~/assets/images/icons/acacia.svg"-->
      <!--  width="55" height="200"-->
      <!--  alt="acacia"-->
      <!--&gt;-->
      <v-container id="home" :fluid="$vuetify.breakpoint.mdAndDown" class="px-6 px-sm-12 h-100">
        <v-row class="mt-md-0 position-relative h-100" :class="{ 'h-100': $vuetify.breakpoint.mdAndUp }">
          <v-col cols="12" sm="8" md="6" class="d-flex align-md-center">
            <div id="main-title" class="" data-aos="fade-up" data-aos-delay="300">
              <div class="top-line"></div>
              <h1 class="white--text avenir-heavy" :class="$vuetify.breakpoint.mdAndUp ? 'font-60pt line-60pt' : $vuetify.breakpoint.smAndUp ? 'font-50pt line-50pt' : 'font-36pt line-36pt'">
                Haz tuya la <br class="hidden-sm-and-down"> magia de <br> San Miguel
              </h1>
              <div class="bottom-line"></div>
            </div>
          </v-col>
          <v-col class="header-form" cols="12" md="6">
            <v-card
              data-aos="fade-up" data-aos-delay="300"
              elevation="2"
              class="mb-6 mb-sm-0 header-for"
              :max-width="$vuetify.breakpoint.smAndUp ? '310' : '300'"
            >
              <v-card-text class="op-semi-bold mt-3">
                <h2 class="avenir-black font-12pt primary--text text-center">
                  COMUNICATE CON NOSOTROS
                </h2>
                <v-form ref="header_form" class="mt-6" v-model="valid" lazy-validation>
                  <v-row class="mx-4">
                    <v-text-field
                      v-model="form.name"
                      type="text"
                      name="input-10-1"
                      label="Nombre"
                      maxlength="20"
                      :rules="required_rules"
                    />
                    <v-text-field
                      class="header-text-field"
                      v-model="form.email"
                      type="email"
                      name="input-10-1"
                      label="Correo electrónico"
                      maxlength="30"
                      :rules="email_rules"
                    />
                    <v-text-field
                      class="header-text-field"
                      v-model="form.phone"
                      name="input-10-1"
                      label="Teléfono"
                      :rules="required_rules"
                      type="text" pattern="\d*" maxlength="15"
                    />
                  </v-row>
                </v-form>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-btn
                  depressed
                  class="px-5 mb-6 font-10pt avenir-black white--text"
                  color="primary"
                  :loading="loading"
                  height="2.5rem"
                  :disabled="!valid"
                  @click="sendForm()"
                >
                  <span>ENVIAR MENSAJE</span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-img>
  <!-- DESCRIPTION -->
  <v-container id="description" :fluid="$vuetify.breakpoint.mdAndDown" class="px-6 px-sm-12 py-md-12">
    <v-row class="py-6 py-sm-16">
      <v-col cols="12" sm="6" md="6" class="mb-8">
        <h3 class="acaslon-pro-italic font-20pt">En terracota_</h3>
        <p class="avenir font-12pt">Disfruta de hacer ejercicio o dar un paseo al aire libre, el recorrido peatonal
          te llevará entre árboles y jardineras llenas de flores de temporada. Pasa una tarde divertida en la alberca
          o planea una parrillada con amigos y familiares. El área común, con asador y baños, está diseñada para
          la convivencia entre familia y vecinos.
        </p>
      </v-col>
      <div class="position-relative">
      <v-divider class="description-divider" vertical></v-divider>
      </div>
      <v-col cols="12" sm="6" md="6" class="d-flex justify-center align-center align-md-end">
        <div>
          <p class="a-caslon font-12pt text-center">Un proyecto de</p>
          <a href="https://inversionescapital.com/" target="_blank">
            <img src="~/assets/images/logos/incap.svg" class="object-fit-contain" width="200" height="95" alt="inversiones capital">
          </a>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <!-- MODELS -->
  <models/>
  <!-- GALLERY -->
  <v-container id="amenities" :fluid="$vuetify.breakpoint.mdAndDown" class="position-relative pt-12">
    <amenities />
  </v-container>
  <v-container :fluid="$vuetify.breakpoint.mdAndDown" class="px-6 px-sm-12">
    <v-row class="mt-3">
      <v-col cols="12" sm="6" md="6" class="d-flex align-center">
        <p v-if="images[slide]" class="avenir font-14pt">{{ images[slide].text }}</p>
      </v-col>
      <v-col cols="12" sm="6" md="6" :class="$vuetify.breakpoint.smAndUp ? 'd-flex justify-end' : 'd-flex justify-center'">
        <v-btn
          depressed tile
          class="white--text"
          color="primary"
          height="37"
          @click="$refs.contact.show = true"
        >
          <span class="font-11pt gotham-bold ls-i">Obtener más información</span>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
  <!-- LOCATION -->
  <v-container id="contact" :fluid="$vuetify.breakpoint.mdAndDown" class="px-6 px-sm-12">
    <v-row class="my-6 my-sm-12">
      <v-col cols="12" md="6">
        <div class="d-inline-block">
          <div class="top-line" />
          <h2 class="avenir-heavy font-50pt line-50pt title-color" :class="$vuetify.breakpoint.smAndUp ? 'font-50pt line-60pt' : 'font-40pt line-50pt'">
            Con gusto <br> aclaramos <br> tus dudas.
          </h2>
          <div class="bottom-line" />
        </div>
        <div class="mt-8">
          <div class="d-flex align-center mt-2">
            <a :href="'https://wa.me/' + $config.whatsapp" aria-label="Whatsapp" class="mr-2 hover-scale" target="_blank" rel="noopener">
              <v-icon>{{ mdiWhatsapp }}</v-icon>
              <span class="link black--text gotham-book">{{ $config.whatsapp_format }}</span>
            </a>
          </div>
          <div class="d-flex align-center gotham-book mt-2">
            <a href="mailto:info@terracotahomes.com" aria-label="Email" class="mr-2 hover-scale">
              <v-icon>{{ mdiEmail }}</v-icon>
              <span class="link black--text ml-1">info@terracotahomes.com</span>
            </a>
          </div>
          <!--<div class="gotham-book">(52) 415 147 1516</div>-->
          <!--<div class="gotham-book">info@terracotahomes.com</div>-->
        </div>
        <v-btn
          depressed tile
          class="white--text mt-12"
          color="primary"
          height="37"
          @click="$refs.contact.show = true"
        >
          <span class="font-11pt gotham-bold ls-i">Agendar una cita</span>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.033384533988!2d-100.69205488533669!3d20.910976486062317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b5237e3e440ed%3A0x6e330f12d4bb3a47!2sTerracota%20Homes!5e0!3m2!1ses-419!2smx!4v1596492600968!5m2!1ses-419!2smx"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </v-col>
    </v-row>
  </v-container>

  <social />

  <contact-dialog ref="contact" />
</div>
</template>

<script>
import { mdiClose, mdiChevronLeft, mdiChevronRight, mdiWhatsapp, mdiEmail } from '@mdi/js'
import Social from "~/components/Social";
import Models from "~/components/Models";
export default {
  components: { Social, Models },
  head: {
    titleTemplate: 'Terracota San Miguel'
  },
  data: () => ({
    mdiClose, mdiChevronLeft, mdiChevronRight, mdiWhatsapp, mdiEmail,
    slide: 0,
    images: [
        { 'src': require('~/assets/images/gallery/gallery1.jpg'), 'text': 'La fachada busca tener poca densidad habitacinoal para tener un edificio discreto de sólo tres niveles, y celosías que ofrecen privacidad sin perder luz natural.', 'title': 'FACHADA' },
        { 'src': require('~/assets/images/gallery/gallery2.jpg'), 'text': '89 departamentos con 4 tipologias distintas que van desde los 63m2 hasta los 245 m2 22 locales comerciales en Planta Baja.', 'title': 'ACACIA' },
        { 'src': require('~/assets/images/gallery/gallery3.jpg'), 'text': 'Las amenidades de Acacia, como la alberca y el chapoteadero son de acceso exclusivo para los residentes.', 'title': 'ALBERCA' },
        { 'src': require('~/assets/images/gallery/gallery4.jpg'), 'text': 'El núcleo principal de distribución tipo pasarela ofrece un recorrido ameno desde el estacionamiento hasta la entrada de cada departamento.', 'title': 'CORREDOR PRINCIPAL' },
        { 'src': require('~/assets/images/gallery/gallery5.jpg'), 'text': 'Los modelos de Kalena Acacia aprovechan al máximo las características de cada ubicación. Los Oriol de planta baja tienen una espaciosa terraza, ideal para pasar tiempo al aire libre.', 'title': 'ORIOL TERRAZA.' }
    ],
    valid: true,
    loading: false,
    error: false,
    form: {
      name: null,
      email: null,
      phone: null,
      comment: ''
    },
    required_rules: [
      v => (!!v || v === 0) || ('Campo requerido')
    ],
    email_rules: [
      v => (!!v || v === 0) || ('Campo requerido'),
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || ('Correo invalido')
    ],
  }),
  methods: {
    async sendForm () {
      this.error = false
      if (!this.$refs.header_form.validate()) {
        return false
      }
      this.loading = true
      try {
        await this.$axios.post('https://skfonep6yg.execute-api.us-east-1.amazonaws.com/send-email', this.form)
        this.$router.push('/gracias')
        // this.loading = false
        // this.$refs.header_form.reset()
      } catch (e) {
        this.loading = false
        this.error = true
      }
    },
  }
}
</script>
<style scoped>
@import '~/assets/css/style.css';
</style>
