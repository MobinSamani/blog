<template>
  <div class="flex items-center justify-center grow py-8 text-zinc-300">
    <div class="flex flex-col gap-y-8">
      <icon icon="circle-xmark" :class="iconClass" />
      <div :class="messageClass">Result Not Found!</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmptyList",
  props: {
    iconClass: { type: String, default: "fa-5x" },
    messageClass: { type: String, default: "text-2xl" }
  }
};
</script>
