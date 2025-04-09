<template>
    <div class="list-view">
        <router-view/>
    </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.list-view {
    min-width: 250px;
    max-width: 350px;
    width: 350px;
    min-height: 100vh;
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: var(--dim-background-color);
}
</style>