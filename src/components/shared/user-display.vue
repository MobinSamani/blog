<template>
  <div class="flex justify-between gap-x-4 items-center">
    <div class="flex items-center gap-x-2">
      <image-display v-if="value.avatar" :value="value.avatar" :width="36" :height="36" class="rounded-full" />

      <div v-if="fullName || $slots.subtitle" class="flex flex-col gap-y-1">
        <div class="font-bold text-xs">
          {{ fullName }}
        </div>

        <slot name="subtitle"></slot>
      </div>
    </div>
    <slot name="sidebar"></slot>
  </div>
</template>

<script>
import ImageDisplay from "@/components/shared/image-display.vue";

export default {
  name: "UserDisplay",
  components: {
    ImageDisplay
  },
  props: {
    value: { type: Object, required: true }
  },
  computed: {
    fullName() {
      if (!this.value || (!this.value.firstName && !this.value.lastName)) return;
      return (this.value?.firstName + " " + this.value?.lastName).trim();
    }
  }
};
</script>
