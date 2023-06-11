import createRepository from "@/services/api/index.js";

export default {
  install(app) {
    const $axios = app.config.globalProperties.$axios;

    app.config.globalProperties.$repos = createRepository($axios);
  }
};
