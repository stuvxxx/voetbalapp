import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
  },
  {
    path: "/stats",
    name: "stats",
    component: () => import("../views/StatsView.vue"),
  },
  {
    path: "/spelers",
    name: "spelers",
    component: () => import("../views/SpelersView.vue"),
  },
  {
    path: "/wedstrijden",
    name: "wedstrijden",
    component: () => import("../views/WedstrijdenView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
