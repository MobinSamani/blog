<template>
  <div class="grow w-full flex flex-col gap-y-8">
    <div class="flex flex-col sm:flex-row lg:items-center justify-between gap-4">
      <c-input placeholder="Search" icon="magnifying-glass" wrapper-classes="!rounded-3xl" v-model="searchParams.q" />

      <btn block post-icon="plus" router-link to="/posts/create" class="bg-primary focus:bg-primary-dark text-zinc-50 sm:w-auto">Add new post</btn>
    </div>

    <loading v-if="initializing" />

    <template v-else>
      <div v-if="items?.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        <div v-for="item in items" :key="item.id" class="border rounded-lg p-3 flex flex-col gap-y-4">
          <div class="flex flex-col gap-y-2.5">
            <image-display v-if="item.image" :value="item.image" :width="582" :height="123" />

            <h4 v-if="item.id" class="text-lg font-bold">Post #{{ item.id }}</h4>

            <p v-if="item.text" class="text-sm font-light text-zinc-500">{{ item.text }}</p>

            <tags-display v-if="item.tags?.length" :value="item.tags" />
          </div>

          <user-display v-if="item.user" :value="item.user" class="mt-auto">
            <template v-if="item.publishDate" v-slot:subtitle>
              <div class="text-sm font-light text-zinc-400">
                {{ new Date(item.publishDate)?.toDateString() }}
              </div>
            </template>

            <template v-if="item.likes !== null" v-slot:sidebar>
              <div class="flex items-center gap-x-1">
                <div class="text-sm font-light text-zinc-400">
                  {{ item.likes }}
                </div>

                <icon icon="heart" class="text-zinc-300" />
              </div>
            </template>
          </user-display>
        </div>
      </div>

      <empty-list v-else />
    </template>
  </div>
</template>

<script>
import Btn from "@/components/shared/btn.vue";
import CInput from "@/components/shared/inputs/c-input.vue";
import EmptyList from "@/components/shared/empty-list.vue";
import ImageDisplay from "@/components/shared/image-display.vue";
import Loading from "@/components/shared/loading.vue";
import TagsDisplay from "@/components/shared/tags-display.vue";
import UserDisplay from "@/components/shared/user-display.vue";
import { debounce } from "@/mixins/debounce.js";

export default {
  name: "Posts",
  components: {
    Btn,
    CInput,
    EmptyList,
    ImageDisplay,
    Loading,
    TagsDisplay,
    UserDisplay
  },
  data() {
    return {
      initializing: true,
      items: [],
      searchParams: {
        q: null,
        _limit: 20,
        _expand: "user"
      }
    };
  },
  metaInfo() {
    return {
      title: "Posts"
    };
  },
  mounted() {
    this.getItems();
    this.$watch("searchParams.q", debounce(this.getItems, 500));
  },
  methods: {
    async getItems() {
      this.initializing = true;

      try {
        const res = await this.$repos.posts.getAll(this.searchParams);
        this.items = res;
      } catch (error) {
        this.$toast.error(error);
      } finally {
        this.initializing = false;
      }
    }
  }
};
</script>
