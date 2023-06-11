import { createRouter, createWebHistory } from "vue-router";

// Layouts
const DefaultLayout = () => import("@/layouts/default.vue");

// Pages
import posts from "./posts.js";
import errors from "./errors.js";

const options = {
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/posts",
      component: DefaultLayout,
      children: [posts, ...errors]
    }
  ]
};

export default createRouter(options);
