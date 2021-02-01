import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Home.vue";
import MainText from "../views/Texts/MainText.vue";
import SupportingText from "../views/Texts/SupportingText.vue";
import Video1 from "../views/Videos/Video1.vue";
import Video2 from "../views/Videos/Video2.vue";
import Video3 from "../views/Videos/Video3.vue";
import Members from "../views/Members.vue";
import Mikey from "../views/Authors/Mikey.vue";
import Marcelo from "../views/Authors/Marcelo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/maintext",
    name: "MainText",
    component: MainText,
  },
  {
    path: "/supportingtext",
    name: "SupportingText",
    component: SupportingText,
  },
  {
    path: "/video1",
    name: "Video1",
    component: Video1,
  },
  {
    path: "/video2",
    name: "Video2",
    component: Video2,
  },
  {
    path: "/video3",
    name: "Video3",
    component: Video3,
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
  },
  {
    path: "/marcelo-del-pilar",
    name: "Marcelo",
    component: Marcelo,
  },
  { path: "/mikey-bustos", name: "Mikey", component: Mikey },
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
