export default {
  name: "Posts",
  path: "/posts",
  component: { template: "<router-view/>" },
  children: [
    {
      name: "Posts",
      path: "/posts",
      component: () => import("@/pages/posts/index.vue")
    },
    {
      name: "CreatePost",
      path: "/posts/create",
      component: () => import("@/pages/posts/create.vue")
    },
    {
      name: "ViewPost",
      path: "/posts/:id",
      component: () => import("@/pages/posts/view.vue"),
      props: true
    }
  ]
};
