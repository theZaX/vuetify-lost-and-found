import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/LandingPage.vue";

import DashboardPage from "../views/DashboardPage";
import FoundListPage from "../views/FoundListPage";
import LostListPage from "../views/LostListPage";

Vue.use(VueRouter);

const routes = [
  {
    component: LandingPage,
    path: "/",
    name: "LandingPage",
  },
  {
    component: DashboardPage,
    path: "/dashboard",
    name: "Dashboard",
  },
  {
    component: FoundListPage,
    path: "/found",
    name: "FoundListPage",
  },
  {
    component: LostListPage,
    path: "/lost",
    name: "LostListPage",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
