import { createApp } from "vue";
import App from "@/app.vue";
import Router from "@/router/index.js";

import Config from "@/plugins/config";
import Axios from "@/plugins/axios";
import Repository from "@/plugins/repository";
import Toastification from "vue-toastification";
import Toast from "@/plugins/toast";
import { createMetaManager, plugin as metaPlugin } from "vue-meta";
import Icon from "@/plugins/icon";

import "vue-toastification/dist/index.css";
import "./assets/styles/main.css";

const metaManager = createMetaManager();

const app = createApp(App);

app.use(Router);
app.use(Config);
app.use(Axios);
app.use(Repository);
app.use(metaManager);
app.use(metaPlugin);
app.use(Toastification, { position: "bottom-left" });
app.use(Toast);

app.component("icon", Icon);

app.mount("#app");
