<script setup lang="ts"></script>

<template>
  <div class="app">
    <router-view />
  </div>
</template>

<style scoped>
.app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background);
  color: var(--text);
}
</style>
