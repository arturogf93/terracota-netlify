<template>
  <div>
    <v-dialog v-model="show" persistent max-width="900" class="overflow-visible">
      <div class="d-flex fill-height align-center justify-center">
        <v-img
          :aspect-ratio="16/9"
          width="100%"
          max-width="900"
          :src="images[random]"
          :lazy-src="images[random]"
          class="d-flex align-center justify-center justify-sm-start position-relative overflow-visible"
        >
          <div class="close-button">
            <v-btn color="#fff" icon outlined tile @click="show = false">
              <v-icon>{{ mdiClose }}</v-icon>
            </v-btn>
          </div>
          <v-card
            elevation="2"
            class="dialog-form my-6"
            :class="$vuetify.breakpoint.smAndUp ? 'ml-6' : 'ma-auto'"
            light
            :max-width="$vuetify.breakpoint.smAndUp ? '310px' : 'auto'"
          >
            <v-card-text class="op-semi-bold mt-3">
              <p class="avenir-black font-20pt primary--text mx-2 lh-1">
                COMUNICATE <br> CON NOSOTROS
              </p>
              <v-form ref="header_form" class="mt-3" v-model="valid" lazy-validation>
                <div class="mx-2">
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
                </div>
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
          <div class="dialog-logo hidden-xs-only">
            <v-img
              max-width="150"
              contain
              class="pointer ma-auto hover-scale"
              :src="require('~/assets/images/logos/logo.svg')"
            ></v-img>
          </div>
        </v-img>
      </div>
      <!--<v-btn @click="error = true">error</v-btn>-->
    </v-dialog>
    <v-dialog v-model="error" max-width="500">
      <v-card>
        <v-card-text class="avenir font-14pt black--text pt-6">
          <v-alert
            dense
            text
            :icon="$vuetify.breakpoint.smAndUp"
            type="error"
          >
            Su mensaje no pudo ser enviado, favor de intentarlo mas tarde o mandar un correo a
            <span class="avenir-heavy"><a :href="`mailto:${ $config.email }`" target="_blank" rel="noopener">
              {{ $config.email }}
            </a></span>
          </v-alert>
          <div class="text-center">
            <v-btn
              depressed tile
              class="white--text"
              color="primary"
              height="37"
              @click="error = false"
            >
              <span class="font-11pt gotham-bold ls-i">Cerrar</span>
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mdiClose } from '@mdi/js'
export default {
  name: "ContactDialog",
  data: () => ({
    mdiClose,
    show: false,
    valid: true,
    loading: false,
    error: false,
    form: {
      name: null,
      email: null,
      phone: null
    },
    required_rules: [
      v => (!!v || v === 0) || ('Campo requerido')
    ],
    email_rules: [
      v => (!!v || v === 0) || ('Campo requerido'),
      v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || ('Correo invalido')
    ],
    images: [
      require('~/assets/images/gallery/gallery1.jpg'),
      require('~/assets/images/gallery/gallery2.jpg'),
      require('~/assets/images/gallery/gallery3.jpg'),
      require('~/assets/images/gallery/gallery4.jpg'),
      require('~/assets/images/gallery/gallery5.jpg')
    ],
  }),
  computed: {
    random () {
      return Math.floor(Math.random() * (3))
    }
  },
  methods: {
    async sendForm () {
      this.error = false
      if (!this.$refs.header_form.validate()) {
        return false
      }
      this.loading = true
      try {
        await this.$axios.post('https://10ujzpm0ne.execute-api.us-east-1.amazonaws.com/send', this.form)
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
