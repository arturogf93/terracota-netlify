import Vue from 'vue'
import VueGtag from 'vue-gtag'

Vue.use(VueGtag, {
  config: {
    id: 'UA-148908693-6',
    params: {
      send_page_view: true,
    }
  },
  includes: [
    { id: 'AW-348816061' }
  ]
})
