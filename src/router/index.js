import Vue from "vue"
import VueRouter from "vue-router"
import landing from "../views/landing.vue"
import contact from "../views/contact.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "landing",
    component: landing
  },
  {
    path: "/contact",
    name: "contact",
    component: contact
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
