export default [
  {
    name: "ServerError",
    path: "/500",
    component: () => import("@/pages/error/500.vue")
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("@/pages/error/404.vue")
  }
];
