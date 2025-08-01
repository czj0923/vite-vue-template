<template>
  <router-view></router-view>
</template>
<script setup lang="ts">
import { definePage } from 'unplugin-vue-router/runtime';
definePage({
  redirect: '/home'
});
</script>
<style lang="scss" scoped></style>
