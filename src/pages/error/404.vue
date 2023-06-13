<template>
  <div
    class="bg-zinc-50 shadow-xl rounded-3xl w-full sm:w-2/3 md:w-1/2 lg:w-1/3 2xl:w-1/4 p-8 flex flex-col gap-y-8 items-center justify-center text-center"
  >
    <h1 class="text-9xl font-bold text-zinc-200">404</h1>
    <h2 class="text-3xl font-bold text-zinc-600">Oops!</h2>

    <div class="text-zinc-400 max-w-[350px]">We could not find the page you are looking for; check the URL and try again</div>

    <btn router-link to="/" block class="bg-zinc-200 hover:bg-zinc-300">Back to Home</btn>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";

export default {
  name: "NotFound",
  components: {
    Btn
  },
  metaInfo() {
    return {
      title: "404 Page Not Found"
    };
  }
};
</script>
