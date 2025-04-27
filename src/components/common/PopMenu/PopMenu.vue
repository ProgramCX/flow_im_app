<!--
description: 右键菜单
author: 程旭
date: 2025-04-10
-->
<template>
    <div class="pop-menu flex-column-all-center" ref="popMenuRef" v-if="props.attribute.visible" @mouseenter="emit('hover')" @mouseleave="emit('hoverEnd')">
        <PopMenuItem v-for="(item, index) in props.attribute.items" :key="index" :item="item" />
    </div>
</template>
<script setup lang="ts">
import { watch, ref, nextTick } from 'vue';
import PopMenuItem from './PopMenuItem.vue';

import { PopMenuAttributeInterface } from '../PopMenu/index';

import { useMouse } from '@vueuse/core'

const { x, y } = useMouse();

const props = defineProps<{
    attribute: PopMenuAttributeInterface;
}>();

const emit = defineEmits<{
    (e: 'close'): void;
    (e: 'hover'): void;
    (e: "hoverEnd"): void;
}>();

const popMenuRef = ref<HTMLElement | null>(null);

// 监听点击外部关闭
const handleClickOutside = (_e: MouseEvent) => {
    if (popMenuRef.value /*&& !popMenuRef.value.contains(e.target as Node)*/) {
        emit('close');
    }
};

const setPosition = (x: number, y: number) => {
    const popMenu = popMenuRef.value;
    if (!popMenu) {
        return;
    }
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const popMenuWidth = popMenu.offsetWidth;
    const popMenuHeight = popMenu.offsetHeight;

    if (x + popMenuWidth > windowWidth) {
        popMenu.style.left = `${windowWidth - popMenuWidth - 20}px`;
        console.log('x', x, windowWidth, popMenuWidth);
    } else {
        popMenu.style.left = `${x}px`;
    }

    if (y + popMenuHeight > windowHeight) {
        popMenu.style.top = `${windowHeight - popMenuHeight - 20}px`;
        console.log('y', y, windowHeight, popMenuHeight);
    } else {
        popMenu.style.top = `${y}px`;

    }
}

try{ 
    watch(() => props.attribute.visible, async (newVal) => {
    console.log('visible', newVal);
    if (newVal) {
        await nextTick();   // 等待DOM更新完成
        if (props.attribute.autoPositioning) {
            setPosition(x.value, y.value);
        } else {
            if (!props.attribute.position) {
                setPosition(x.value, y.value);
            } else {
                setPosition(props.attribute.position.x, props.attribute.position.y);
            }
        }
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 100);
    } else {
        document.removeEventListener('click', handleClickOutside);
    }
}, { deep: true, immediate: true });
}
catch (e) {
    console.error('Error in PopMenu:', e);
}



</script>
<style lang="scss" scoped>
.pop-menu {
    min-width: 180px;
    border-radius: 10px;
    background-color: var(--pop-menu-background-color);
    transition: top 0.15s ease, left 0.15s ease, opacity 0.2s ease;
    opacity: 1;
    padding: 5px 5px;
    box-shadow: var(--pop-menu-box-shadow);
    backdrop-filter: blur(5px);
    position: absolute;
    z-index: 9999;
    gap:1px;
    border: 1px solid var(--pop-menu-border-color);
}
</style>