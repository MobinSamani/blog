<template>
  <div class="flex items-center justify-center px-4 py-[100px] lg:px-[100px]">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" appear>
        <component :is="Component" class="max-w-[1024px]" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>
