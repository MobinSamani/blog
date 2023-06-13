<template>
  <div class="grow w-full flex flex-col">
    <loading v-if="initializing" />

    <div v-else class="flex flex-col gap-y-4 border rounded-lg p-3">
      <image-display v-if="item.image" :value="item.image" :width="1024" :height="555" />

      <h4 class="text-lg font-bold">Post #{{ id }}</h4>

      <p v-if="item.text" class="font-light text-zinc-500">{{ item.text }}</p>

      <tags-display v-if="item.tags?.length" :value="item.tags" />

      <user-display v-if="item.user" :value="item.user">
        <template v-if="item.publishDate" v-slot:subtitle>
          <div class="font-light text-zinc-400">
            {{ new Date(item.publishDate)?.toDateString() }}
          </div>
        </template>

        <template v-if="item.likes !== null" v-slot:sidebar>
          <div class="flex items-center gap-x-1">
            <div class="font-light text-zinc-400">
              {{ item.likes }}
            </div>

            <icon icon="heart" class="text-zinc-300" />
          </div>
        </template>
      </user-display>
    </div>
  </div>
</template>

<script>
import ImageDisplay from "@/components/shared/image-display.vue";
import Loading from "@/components/shared/loading.vue";
import TagsDisplay from "@/components/shared/tags-display.vue";
import UserDisplay from "@/components/shared/user-display.vue";

export default {
  name: "ViewPost",
  components: {
    ImageDisplay,
    Loading,
    TagsDisplay,
    UserDisplay
  },
  props: ["id"],
  data() {
    return {
      initializing: true,
      item: null
    };
  },
  metaInfo() {
    return {
      title: `View Post #${this.id}`
    };
  },
  mounted() {
    this.getItem();
  },
  methods: {
    async getItem() {
      try {
        const res = await this.$repos.posts.getById(this.id, { _expand: "user" });
        delete res.id;
        this.item = res;
        this.initializing = false;
      } catch (error) {
        this.$router.push("/posts");
        this.$toast.error(error);
      }
    }
  }
};
</script>
