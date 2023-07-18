<template>
  <div id="social-container">
    <div>
      <a :href="'mailto:' + $config.email" target="_blank">
        <v-btn width="36" height="36" fab color="primary">
          <!--<img src="~/assets/images/icons/email.svg" width="20" height="20" alt="email">-->
          <v-icon>{{ mdiEmailOutline }}</v-icon>
        </v-btn>
      </a>
    </div>
    <div class="mt-3">
      <a :href="$config.instagram" target="_blank">
        <v-btn width="36" height="36" fab color="primary">
          <v-icon>{{ mdiInstagram }}</v-icon>
        </v-btn>
      </a>
    </div>
    <div class="mt-3">
      <a :href="$config.facebook">
        <v-btn width="36" height="36" fab color="primary">
          <v-icon>{{ mdiFacebook }}</v-icon>
        </v-btn>
      </a>
    </div>
    <div class="mt-3">
      <a :href="'https://wa.me/' + $config.whatsapp" target="_blank">
        <v-btn width="36" height="36" fab color="primary">
          <v-icon>{{ mdiWhatsapp }}</v-icon>
        </v-btn>
      </a>
    </div>
  </div>
</template>

<script>
import { mdiInstagram, mdiFacebook, mdiWhatsapp, mdiEmailOutline  } from '@mdi/js'
export default {
  name: "Social",
  data: () => ({
    mdiInstagram, mdiFacebook, mdiWhatsapp, mdiEmailOutline
  })
}
</script>

<style scoped>
#social-container {
  position: fixed;
  bottom: 230px;
  right: 25px;
  text-align: center;
  /*z-index: 100;*/
}
.s-icon, .whatsapp-icon {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 auto;
}
.whatsapp-icon {
  background: #4CA350 !important;
  width: 40px;
  height: 40px;
}

  /***********/
/* xsOnly */
/***********/
@media screen and (max-width: 600px) {
  #social-container {
    /*bottom: 25px;*/
    right: 10px;
  }
}
</style>
