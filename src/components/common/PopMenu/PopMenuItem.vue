<template>
    <div class="popmenu-item flex-row-align-center .flex-row-space-between">
        <slot name="default"></slot>
        <div class="popmenu-item-icon">
            <SvgIcon :icon="iconMap[props.item.icon]" :width="16" :height="16"/>
        </div>
        <div class="popmenu-item-text">
            <slot name="text" ></slot>
            <span class="text">{{props.item.name}}</span>
        </div>
    </div>
</template>
<script setup lang="ts">
import SvgIcon from '../SvgIcon.vue';
import { PopMenuItemInterface } from '.';
import { onMounted } from 'vue';
import { iconMap } from '../../../util/icon/iconMap';
const props = defineProps<{
    item: PopMenuItemInterface;
}>();


onMounted(() => {
    if (props.item.click) {
        const item = document.querySelector('.popmenu-item') as HTMLElement;
        item.addEventListener('click', () => {
            props.item.click();
        });
    }

    // if (props.item.children.length>0){
    //     //TODO: 显示子菜单
    // }
});
</script>
<style lang="scss" scoped>
.popmenu-item{
    width: 100%;
    padding: 2px 8px;
    background-color: rgba(255, 255, 255, 0);
    cursor: default;
    gap: 8px;
    transition: all 0.2s ease-in-out;
    &:hover{
        background-color: var(--pop-item-background-color-hover);
        backdrop-filter: blur(3px);
        border-radius: 5px;
    }
    &:active{
        background-color: var(--pop-item-background-color-active);
        backdrop-filter: blur(5px);
        border-radius: 5px;
    }
    &:hover .popmenu-item-icon{
        animation: heartBeat;
        animation-duration: 2s;
    }
}

.text{
    font-size: 14px;
    color: var(--pop-item-text-color);
}
</style>