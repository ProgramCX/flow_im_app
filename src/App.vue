<script setup lang="ts">
import './util/theme';
import TitleBar from './components/common/TitleBar.vue';
</script>

<template>
  <div class="app">
    <TitleBar/>
    <router-view />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  padding: 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  color: var(--text);
}
</style>
