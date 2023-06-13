<template>
  <div v-if="value?.length" class="flex flex-wrap gap-2">
    <div v-for="(item, index) in value" :key="`${item}-${index}`" class="border rounded-3xl py-1 px-3 text-xs font-light text-zinc-500 capitalize">
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TagsDisplay",
  props: {
    value: { type: Array, required: true }
  }
};
</script>
