import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import common from "./plugins/common"
import components from "./plugins/components"

Vue.config.productionTip = false
Vue.use(common)
Vue.use(components)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
