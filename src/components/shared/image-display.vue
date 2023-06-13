<template>
  <div class="bg-zinc-200">
    <div
      v-if="value"
      class="max-w-full h-auto bg-center bg-cover bg-no-repeat"
      :style="`background-image: url(${value}); width: ${width}px; height: ${height}px`"
    ></div>

    <div v-else class="flex items-center justify-center text-zinc-500 max-w-full h-auto" :style="`width: ${width}px; height: ${height}px`">
      {{ $config.appName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageDisplay",
  props: {
    value: String,
    width: { type: Number, required: true },
    height: { type: Number, required: true }
  }
};
</script>
