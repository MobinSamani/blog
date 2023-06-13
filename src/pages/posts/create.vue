<template>
  <div class="grow w-full flex flex-col gap-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center gap-6 justify-between">
      <div class="flex items-center gap-x-8">
        <btn icon="arrow-left" icon-class="fa-lg" router-link to="/posts" class="border rounded-full w-[40px] h-[40px] !p-0" />
        <div class="font-bold text-2xl">New post</div>
      </div>

      <btn :disabled="loading" :loading="loading" block class="bg-primary focus:bg-primary-dark text-zinc-50 sm:w-auto" @click="submit">
        Publish post
      </btn>
    </div>

    <form class="flex flex-col gap-y-6" @submit.prevent="submit">
      <c-input label="Title" required v-model="model.title" />
      <c-textarea label="Description" v-model="model.description" />
      <input-tags label="Tags" v-model="model.tags" />
    </form>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import CInput from "@/components/shared/inputs/c-input.vue";
import CTextarea from "@/components/shared/inputs/c-textarea.vue";
import InputTags from "@/components/shared/inputs/input-tags.vue";
import Validation from "@/mixins/validation.vue";

export default {
  name: "CreatePost",
  mixins: [Validation],
  components: {
    Btn,
    CInput,
    CTextarea,
    InputTags
  },
  data() {
    return {
      loading: false,
      model: {
        title: null,
        description: null,
        tags: []
      },
      requiredFields: ["title"]
    };
  },
  metaInfo() {
    return {
      title: "New Post"
    };
  },
  methods: {
    async submit() {
      if (!this.validate(this.model, this.requiredFields)) return;
      this.loading = true;

      try {
        await this.$repos.posts.create(this.model);
        this.$router.push("/posts");
        this.$toast.success("Post Created Successfully");
      } catch (error) {
        this.$toast.error(error);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>
