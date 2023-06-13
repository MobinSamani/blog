<template>
  <div v-if="value?.length" class="flex flex-wrap gap-2">
    <component
      :is="deletable ? 'btn' : 'div'"
      v-for="(item, index) in value"
      :key="`${item}-${index}`"
      class="border rounded-3xl py-1 px-3 text-xs font-light text-zinc-500 capitalize flex items-center gap-x-2 !shadow-none"
      :class="[itemClasses, { 'hover:border-zinc-400 hover:text-zinc-900 group': deletable }]"
      pre-icon="xmark"
      icon-class="text-zinc-400 group-hover:text-zinc-900 duration-150"
      @click="emitDelete(item)"
    >
      {{ item }}
    </component>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";

export default {
  name: "TagsDisplay",
  components: {
    Btn
  },
  props: {
    value: { type: Array, required: true },
    deletable: { type: Boolean, default: false },
    itemClasses: String
  },
  methods: {
    emitDelete(item) {
      if (!this.deletable) return;
      this.$emit("delete", item);
    }
  }
};
</script>
