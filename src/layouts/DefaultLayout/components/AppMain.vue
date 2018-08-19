<template>
  <a-layout-content :style="{ margin: '24px 24px 0px', height: '100%' }">
    <transition name="fade" mode="out-in">
      <!-- <router-view :key="key"></router-view> -->
      <router-view></router-view>
    </transition>
  </a-layout-content>
</template>

<script>
export default {
  name: 'AppMain',
};
</script>
