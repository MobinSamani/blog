<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content ? `${$config.appName} | ${content}` : $config.appName }}</template>
  </metainfo>

  <router-view class="min-h-screen bg-zinc-100 text-zinc-900 flex flex-col" />
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "",
      meta: [
        { charset: "utf-8" },
        {
          hid: "viewport",
          name: "viewport",
          content: "width=device-width,initial-scale=1.0"
        },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { hid: "robots", name: "robots", content: "index, follow" },
        { name: "application-name", content: this.$config.appName },
        { name: "theme-color", content: "#f4f4f5" },
      ]
    };
  }
};
</script>
