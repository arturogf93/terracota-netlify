<template>
  <section id="contact-section" class="mt-sm-10">
    <v-row>
      <v-col cols="12">
        <section data-aos="fade-right">
          <h2 class="acaslon-pro-italic font-40 mb-0 mb-sm-2 mb-4 font-weight-regular">Contacto_</h2>
        </section>
      </v-col>
      <v-col cols="12" sm="6">
        <section data-aos="fade-up">
          <div class="mb-5">
            <div class="acaslon-pro-italic font-20">Agenda una cita:</div>
            <div class="d-flex align-center mt-2">
              <a :href="'https://wa.me/' + $config.whatsapp" aria-label="Whatsapp" class="mr-2 hover-scale" target="_blank" rel="noopener">
                <v-icon>{{ mdiWhatsapp }}</v-icon>
                <div class="link black--text gotham-book">{{ $config.whatsapp_format }}</div>
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
          <v-form
            ref="form"
            id="contact-form"
            v-model="valid"
            lazy-validation
          >
            <v-text-field
              v-model="contact.name"
              :rules="required_rules"
              placeholder="Nombre *"
              required
              solo flat
              class="mb-2 gotham-book"
              color="#E16E49"
            ></v-text-field>

            <v-text-field
              v-model="contact.email"
              :rules="email_rules"
              placeholder="Correo *"
              require
              solo flat
              class="mb-2 gotham-book"
              color="#E16E49"
            ></v-text-field>

            <v-text-field
              v-model="contact.phone"
              :rules="required_rules"
              placeholder="Teléfono *"
              require
              solo flat
              class="mb-2 gotham-book"
              color="#E16E49"
            ></v-text-field>

            <v-textarea
              v-model="contact.comment"
              :rules="required_rules"
              placeholder="Comentario *"
              rows="3"
              solo flat
              class="mb-2 gotham-book"
              color="#E16E49"
            ></v-textarea>

            <vue-recaptcha
              sitekey="6LfqC8sZAAAAAKyyEvHk24_uJh6fst7pQmSg7Uug"
              @verify="recaptcha = true"
              @expired="recaptcha = false"
              @error="recaptcha = false"
            ></vue-recaptcha>

              <!--:disabled="!recaptcha"-->
            <v-btn
              color="#E16E49"
              class="white--text px-10 gotham-book mt-5"
              @click="sendForm"
              :loading="loading"
              depressed
              aria-label="Enviar"
            >
              Enviar
            </v-btn>
          </v-form>
          <v-alert v-show="sent === 1" text dense class="mt-3 gotham-book" color="#E16E49" type="success">
            Su mensaje fue enviado.
          </v-alert>
          <v-alert v-show="sent === -1" text dense class="mt-3 gotham-book" color="red" type="error">
            Su mensaje no pudo ser enviado, favor de intentarlo mas tarde o mandar un correo a
            <span class="avenir-heavy"><a :href="`mailto:${ $config.email }`" target="_blank" rel="noopener">
              {{ $config.email }}
            </a></span>
          </v-alert>
        </section>
      </v-col>
      <v-col cols="12" sm="6">
        <section data-aos="fade-up">
          <div>
          <iframe
            title="Google maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.033384533988!2d-100.69205488533669!3d20.910976486062317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842b5237e3e440ed%3A0x6e330f12d4bb3a47!2sTerracota%20Homes!5e0!3m2!1ses-419!2smx!4v1596492600968!5m2!1ses-419!2smx"
            width="100%" height="493" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
            tabindex="0"></iframe>
        </div>
        </section>
      </v-col>
    </v-row>
  </section>
</template>

<script>
  import { mdiEmail, mdiWhatsapp } from '@mdi/js'
  import VueRecaptcha from 'vue-recaptcha';
  export default {
    name: "Contact",
    components: { VueRecaptcha },
    data: () => ({
      mdiEmail, mdiWhatsapp,
      valid: true,
      recaptcha: false,
      sent: 0,
      contact: {
        name: '',
        email: '',
        phone: '',
        comment: ''
      },
      loading: false,
      required_rules: [
        v => (!!v || v === 0) || ('Campo requerido')
      ],
      email_rules: [
        v => (!!v || v === 0) || ('Campo requerido'),
        v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || ('Correo invalido')
      ]
    }),
    methods: {
      async sendForm () {
        this.sent = 0
        if (!this.$refs.form.validate()) {
          return false
        }
        this.loading = true
        try {
          await this.$axios.post('https://10ujzpm0ne.execute-api.us-east-1.amazonaws.com/send', this.form)
          this.loading = false
          this.$refs.form.reset()
          this.sent = 1
        } catch (e) {
          this.loading = false
          this.sent = -1
        }
      }
    }
  }
</script>

<style scoped>
  @import '~/assets/css/index.css';
  a {
    text-decoration: none;
  }
</style>
