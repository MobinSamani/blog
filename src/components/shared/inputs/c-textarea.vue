<template>
  <div class="flex flex-col gap-y-4">
    <label v-if="label || $slots.label" :for="`input-${id}`" class="block text-zinc-600">
      <slot name="label"> {{ label }} : <span v-if="required" class="text-red-500">*</span> </slot>
    </label>

    <div class="flex flex-col gap-y-2">
      <textarea :id="`input-${id}`" :rows="rows" :placeholder="placeholder" :class="classes" :readonly="readonly" v-model="model" />

      <div v-if="error" class="text-red-500 text-sm">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import vModel from "@/mixins/v-model.vue";

export default {
  name: "CTextarea",
  mixins: [vModel],
  props: {
    rows: { type: Number, default: 4 },
    label: String,
    placeholder: String,
    required: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false }
  },
  data() {
    return {
      id: String(Math.floor(Math.random() * 99999999)),
      error: null
    };
  },
  computed: {
    classes() {
      return {
        "bg-zinc-100 border flex items-center rounded-lg focus-within:border-purple-500 duration-150 px-4 py-2 outline-none w-full": true,
        "!border-red-500": this.error
      };
    }
  },
  mounted() {
    if (this.required) {
      this.$watch("model", (value) => {
        if (this.required && !value?.length) this.error = "Required";
        else this.error = "";
      });
    }
  }
};
</script>
