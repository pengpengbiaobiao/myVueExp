import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
//import index from "../views/login/index.vue"
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect:"login"
  },
  {
    path: "/login",
    name: "login",
    component: ()=>import("../views/login/index.vue")
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   component: () =>
  //     import("../views/About.vue")
  // }
];

const router = new VueRouter({
  routes
});

export default router;
