import Vue from "vue";
import VueRouter from "vue-router";
import { publicPath } from "../../vue.config";

import Home from "../views/Home.vue";
import MainText from "../views/MainText.vue";
import SupportingText from "../views/SupportingText.vue";
import Video1 from "../views/Video1.vue";
import Video2 from "../views/Video2.vue";
import Video3 from "../views/Video3.vue";
import Members from "../views/Members.vue";
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
];

const router = new VueRouter({
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

export default router;
