import Vue from "vue"
import VueI18n from "vue-i18n"
import App from "./App.vue"
import router from "./router"
import common from "./plugins/common"
import components from "./plugins/components"
import { translations } from "./locales"

Vue.config.productionTip = false
Vue.use(common)
Vue.use(components)
Vue.use(VueI18n)

// init locales
const i18n = new VueI18n({
  locale: "en", // set locale
  messages: translations
})

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app")
