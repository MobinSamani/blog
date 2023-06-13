<template>
  <div class="flex flex-col gap-y-3">
    <c-input
      :label="label"
      :placeholder="placeholder"
      :icon="icon"
      :readonly="readonly"
      :wrapperClasses="wrapperClasses"
      class="group"
      v-model="value"
      @submit="add"
    >
      <template v-slot:append>
        <btn post-icon="plus" class="text-zinc-200 group-focus-within:text-primary !shadow-none !p-0" :class="{ 'text-primary': value }" @click="add">
          Add
        </btn>
      </template>
    </c-input>

    <tags-display v-if="model?.length" :value="model" deletable item-classes="!py-2 !px-4 !text-sm" @delete="deleteTag" />
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import CInput from "@/components/shared/inputs/c-input.vue";
import TagsDisplay from "@/components/shared/tags-display.vue";
import vModel from "@/mixins/v-model.vue";

export default {
  name: "InputTags",
  mixins: [vModel],
  components: {
    Btn,
    CInput,
    TagsDisplay
  },
  props: {
    label: String,
    placeholder: String,
    icon: String,
    readonly: { type: Boolean, default: false },
    wrapperClasses: String
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    add() {
      const value = this.value?.trim();
      if (!value) return;
      if (!this.model) this.model = [];

      if (this.model.find((item) => item === value)) {
        this.$toast.info("Tag already exist");
      } else {
        this.model.push(value);
      }

      this.value = null;
    },
    deleteTag(tag) {
      this.model = this.model.filter((item) => item !== tag);
    }
  }
};
</script>
