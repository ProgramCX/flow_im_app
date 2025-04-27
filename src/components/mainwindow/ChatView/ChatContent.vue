<template>
  <div class="chat-content">
    <div class="chat-inner-content">

    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.chat-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  border-bottom: 1px solid var(--border-bottom-color);
  .chat-inner-content {
    width: 100%;
    height: calc(100vh - 220px);
    overflow-y: auto;
  }
}

</style>