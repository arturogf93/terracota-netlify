<template>
  <v-app>
    <v-app-bar
      fixed flat
      :color="nav_background"
      height="70"
      v-if="$route.name !== 'gracias' && $route.name !== 'privacidad'"
    >
      <v-img
        max-width="180"
        contain eager
        class="pointer ma-auto hover-scale"
        :src="images.terracota_logo"
        :lazy-src="images.terracota_logo"
        @click="$vuetify.goTo('#start-section', {duration: 800, offset: 20})"
        alt="Terracota"
      ></v-img>
      <v-spacer />
      <!--Desktop-->
      <client-only>
        <div class="hidden-sm-and-down">
          <v-btn
            v-for="(item, index) in menu"
            :key="index"
            text
            @click="$vuetify.goTo(item.target, {duration: 1200, offset: 60})"
          >
            <span class="gotham-medium white--text font-11pt">
              {{ item.title }}
            </span>
          </v-btn>
        </div>
      </client-only>
      <!--Mobile-->
      <client-only>
        <div class="hidden-md-and-up">
          <v-icon large @click="menu_dialog = true">
            {{ mdiMenu }}
          </v-icon>
        </div>
      </client-only>

      <!--Mobile menu-->
      <v-dialog v-if="$vuetify.breakpoint.smAndDown" v-model="menu_dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="primary" class="h-100">
        <div class="mobile-menu-logo">
          <div class="d-flex align-center justify-space-between pt-1">
            <div class="pl-3">
              <v-img
                alt="Terracota Logo"
                contain
                :src="images.terracota_logo"
                :lazy-src="images.terracota_logo"
                transition="scale-transition"
                class="hover-scale pa-4"
                width="180"
              />
            </div>
            <div class="mb-4 mr-3 ">
              <v-icon large @click="menu_dialog = false">
                {{ mdiMenu }}
              </v-icon>
            </div>
          </div>
        </div>
        <div class="d-flex h-100 px-5 align-center">
          <div class="w-100 mb-10">
            <div>
              <div
                v-for="item in menu"
                :key="item.title"
                class="gotham-medium font-16pt white--text pointer"
                :class="{'btn-selected': $route.path === item.path}"
                @click="menu_dialog = false, $vuetify.goTo(item.target, {duration: 1200, offset: 0})"
              >
                {{ item.title }}
                <div class="my-3">
                  <v-divider style="border-color: #C8AC9C"></v-divider>
                </div>
              </div>
            </div>
            <div>
              <div class="white--text font-18pt icon-links d-flex mt-3">
                <a :href="$config.facebook" target="_blank" rel="noopener">
                  <v-icon size="30" dark class="mr-4 hover-scale pointer">{{ mdiFacebook }}</v-icon>
                </a>
                <a :href="$config.instagram" target="_blank" rel="noopener">
                  <v-icon size="30" dark class="mr-4 hover-scale pointer">{{ mdiInstagram }}</v-icon>
                </a>
                <a :href="'https://wa.me/' + $config.whatsapp" target="_blank" rel="noopener">
                  <v-icon size="30" dark class="mr-4 hover-scale pointer">{{ mdiWhatsapp }}</v-icon>
                </a>
                <a :href="$config.maps" target="_blank" rel="noopener">
                  <v-icon size="30" dark class="mr-4 hover-scale pointer">{{ mdiGoogleMaps }}</v-icon>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-menu-contact">
          <div class="white--text font-16pt icon-links">
            <div class="a-caslon">Agenda una cita</div>
              <a :href="'https://wa.me/' + $config.whatsapp" target="_blank" rel="noopener">
                <div class="d-flex align-center">
                  <v-icon small dark class="mr-2">{{ mdiWhatsapp }}</v-icon>
                  <div size="30" class="link white--text gotham-book">{{ $config.whatsapp_format }}</div>
                </div>
              </a>
              <a :href="'mailto:' + $config.email" aria-label="Email" class="hover-scale" target="_blank" rel="noopener">
                <div class="d-flex align-center">
                  <v-icon small dark class="mr-2">{{ mdiEmailOutline }}</v-icon>
                  <div class="link gotham-book white--text font-14pt">{{ $config.email }}</div>
                </div>
              </a>
          </div>
        </div>
      </v-card>
    </v-dialog>
    </v-app-bar>
    <v-main>
        <nuxt />
    </v-main>
    <v-footer
      v-if="$route.name !== 'gracias'"
      :height="$vuetify.breakpoint.smAndUp ? '320' : '550'"
      color="#252626"
      class="elevation-2 pa-0 mt-sm-16"
      :app="$route.meta.footerApp"
    >
      <v-container>
        <v-row class="justify-center">
          <v-col cols="12" class="py-0">
            <v-row class="align-center">
              <v-col
                cols="12"
                sm="4"
                class="mt-12"
                :class="$vuetify.breakpoint.smAndUp ? '' : 'text-center justify-center'"
              >
                <div class="white--text font-14pt icon-links">
                  <div class="a-caslon font-16pt">Agenda una cita</div>
                  <div class="my-4">
                    <div class="mb-3">
                      <a :href="'https://wa.me/' + $config.whatsapp" aria-label="Whatsapp" class="hover-scale" target="_blank" rel="noopener">
                        <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndUp ? '' : 'text-center justify-center'">
                          <v-icon size="30" dark class="mr-2">{{ mdiWhatsapp }}</v-icon>
                          <div class="link gotham-book white--text font-12pt">{{ $config.whatsapp_format }}</div>
                        </div>
                      </a>
                    </div>
                    <div>
                      <a :href="'mailto:' + $config.email" aria-label="Email" class="hover-scale" target="_blank" rel="noopener">
                        <div class="d-flex align-center" :class="$vuetify.breakpoint.smAndUp ? '' : 'text-center justify-center'">
                          <v-icon size="30" dark class="mr-2">{{ mdiEmailOutline }}</v-icon>
                          <div class="link gotham-book white--text font-12pt">{{ $config.email }}</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div class="white--text font-12pt icon-links mt-3">
                  <a :href="$config.facebook" aria-label="Facebook" target="_blank" rel="noopener">
                    <v-icon size="30" dark class="mr-4">{{ mdiFacebook }}</v-icon>
                  </a>
                  <a :href="$config.instagram" aria-label="Instagram" target="_blank" rel="noopener">
                    <v-icon size="30" dark class="mr-4">{{ mdiInstagram }}</v-icon>
                  </a>
                  <a :href="'https://wa.me/' + $config.whatsapp" aria-label="Whatsapp" target="_blank" rel="noopener">
                    <v-icon size="30" dark class="mr-4">{{ mdiWhatsapp }}</v-icon>
                  </a>
                  <a :href="$config.maps" aria-label="Google maps" target="_blank" rel="noopener">
                    <v-icon size="30" dark class="mr-4">{{ mdiGoogleMaps }}</v-icon>
                  </a>
                </div>
              </v-col>
              <v-col cols="12" sm="4" class="d-flex justify-center">
                <v-img
                  max-width="150"
                  contain
                  class="pointer ma-auto hover-scale"
                  :src="images.terracota_logo"
                  :lazy-src="images.terracota_logo"
                ></v-img>
              </v-col>
              <v-col
                cols="12"
                sm="4"
                class="d-flex"
                :class="{ 'justify-end': $vuetify.breakpoint.smAndUp, 'text-center justify-center': $vuetify.breakpoint.xsOnly }">
                <div class="white--text gotham-book font-11pt text-sm-right">
                  <nuxt-link to="/privacidad">
                    <div class="pointer hover-scale mb-3">
                      Aviso de privacidad
                    </div>
                  </nuxt-link>
                  <div>5a Avenida</div>
                  <div>esquina Calle 40 Norte</div>
                  <div>Playa del Carmen,</div>
                  <div>QR 77720</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="12">
            <div>
              <v-img
                width="100%"
                class="ma-auto"
                :src="images.footer_path"
                :lazy-src="images.footer_path"
              ></v-img>
            </div>
          </v-col>
          <v-col cols="12">
            <a href="https://inversionescapital.com/" target="_blank">
              <v-img
                max-width="300"
                contain
                class="pointer ma-auto hover-scale"
                :src="images.incap_logo"
                :lazy-src="images.incap_logo"
              ></v-img>
            </a>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { mdiInstagram, mdiTwitter, mdiFacebook, mdiMenu, mdiCart, mdiHeart, mdiClose, mdiMagnify, mdiMenuDown, mdiGoogleMaps, mdiWhatsapp, mdiEmailOutline  } from '@mdi/js'
export default {
  data () {
    return {
      mdiInstagram, mdiTwitter, mdiFacebook, mdiMenu, mdiCart, mdiHeart, mdiClose, mdiMagnify, mdiMenuDown, mdiGoogleMaps, mdiWhatsapp, mdiEmailOutline,
      menu_dialog: false,
      images: {
        terracota_logo: require('~/assets/images/logos/logo.svg'),
        incap_logo: require('~/assets/images/logos/incap-logo-footer.svg'),
        footer_path: require('~/assets/images/footer-path.png'),
      },
      nav_color: '',
      nav_background: 'transparent',
      miniVariant: false,
      right: true,
      title: 'Vuetify.js'
    }
  },
  jsonld() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      'name': 'TerracotaHomes',
      'url': this.$config.url,
      sameAs: [
        this.$config.facebook,
        this.$config.instagram
      ],
    };
  },
  created() {
    if (process.client) window.addEventListener('scroll', this.onScroll)
  },
  computed: {
    menu () {
      if (this.$route.name === 'index') {
        return [
          {
            title: 'INICIO',
            show: true,
            target: '#start-section'
          },
          {
            title: 'AMENIDADES',
            show: true,
            target: '#amenities-section'
          },
          {
            title: 'UNIDADES',
            show: true,
            target: '#units-section'
          },
          {
            title: 'MASTER PLAN',
            show: true,
            target: '#master-plan-section'
          },
          {
            title: 'CONTACTO',
            show: true,
            target: '#contact-section'
          }
        ]
      }
      else if (this.$route.name === 'lp') {
        return [
          {
            title: 'INICIO',
            show: true,
            target: '#home'
          },
          {
            title: 'MODELOS',
            show: true,
            target: '#models'
          },
          {
            title: 'AMENIDADES',
            show: true,
            target: '#amenities'
          },
          {
            title: 'CONTACTO',
            show: true,
            target: '#contact'
          }
        ]
      }
      return []
    },
  },
  methods: {
    onScroll () {
      if (this.offsetTop > window.innerHeight - 64) {
        this.nav_background = this.$vuetify.theme.currentTheme.primary
      }
      else {
        this.nav_background = 'transparent'
      }
      this.offsetTop = window.scrollY
    },
  }
}
</script>
<style scoped>
  @import '~/assets/css/style.css';
  .menu-text {
    font-size: 11pt !important;
    letter-spacing: 0px;
  }
  .mobile-menu-logo {
    position: absolute;
    top: 0;
    width: 100%;

  }
  .mobile-menu-contact {
    position: absolute;
    bottom: 20px;
    left: 20px;
  }
  @media (max-width: 960px) {
    .menu-text {
      font-size: 14px !important;
    }
  }
</style>
