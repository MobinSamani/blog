import Axios from "axios";

function onResponse(response, ctx) {
  if (response && response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    ctx.$router.push("/500");
    return Promise.reject("Something Went Wrong!");
  }
}

export default {
  install(app) {
    const ctx = app.config.globalProperties;
    const config = ctx.$config;

    const axios = Axios.create({
      baseURL: config.apiUrl,
      headers: {
        common: {
          "X-Requested-With": "XMLHttpRequest",
          Accept: "application/json"
        }
      }
    });

    ctx.$axios = axios;

    axios.interceptors.response.use(
      (response) => onResponse(response, ctx),
      (response) => onResponse(response, ctx)
    );
  }
};
