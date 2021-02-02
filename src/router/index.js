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
    meta: {
      title: "Home",
    },
  },
  {
    path: "/maintext",
    name: "MainText",
    component: MainText,
    meta: {
      title: "Main Text",
    },
  },
  {
    path: "/supportingtext",
    name: "SupportingText",
    component: SupportingText,
    meta: {
      title: "Supporting Text",
    },
  },
  {
    path: "/video1",
    name: "Video1",
    component: Video1,
    meta: {
      title: "Video 1",
    },
  },
  {
    path: "/video2",
    name: "Video2",
    component: Video2,
    meta: {
      title: "Video 2",
    },
  },
  {
    path: "/video3",
    name: "Video3",
    component: Video3,
    meta: {
      title: "Video 3",
    },
  },
  {
    path: "/members",
    name: "Members",
    component: Members,
    meta: {
      title: "Members",
    },
  },
  {
    path: "/marcelo-del-pilar",
    name: "Marcelo",
    component: Marcelo,
    meta: {
      title: "Marcelo Del Pilar",
    },
  },
  {
    path: "/mikey-bustos",
    name: "Mikey",
    component: Mikey,
    meta: {
      title: "Mikey Bustos",
    },
  },
];

const router = new VueRouter({
  scrollBehavior(to) {
    // go to the section
    if (to.hash) {
      return {
        selector: to.hash,
      };
    } else {
      // when routed go to the start
      return { x: 0, y: 0 };
    }
  },
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = "Final Output | " + to.meta.title;
  next();
});

export default router;
