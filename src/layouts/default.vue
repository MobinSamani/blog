<template>
  <div class="flex items-center justify-center p-4 md:p-8">
    <router-view v-slot="{ Component }">
      <transition name="slide-fade" mode="out-in" appear>
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script>
export default {};
</script>
