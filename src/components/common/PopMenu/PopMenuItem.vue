<template>
    <div ref="menuItemRef" class="popmenu-item flex-row-align-center flex-row-space-between" @click="handleClick"
        @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">

        <div class="content flex-row-align-center">
            <slot name="default"></slot>
            <div class="popmenu-item-icon">
                <SvgIcon :icon="iconMap['tick']" :width="16" :height="16" v-if="props.item.checked??false" />
                <SvgIcon :icon="iconMap[props.item.icon]" :width="16" :height="16" v-if="props.item.icon??false" />
            </div>
            <div class="popmenu-item-text flex-row-align-center">
                <slot name="text"></slot>
                <div class="placeholder" style="width: 16px;height: 16px" v-if="!(props.item.checked??false) && (props.item.checkable??false)"></div>
                <span class="text">{{ props.item.name }}</span>
            </div>
        </div>

        <div class="popmenu-hover-icon" v-if="submenu.items.length>0">
            <SvgIcon :icon="iconMap['arrowRightSmall']" :width="16" :height="16" />
        </div>
    </div>

    <PopMenu :attribute="submenu" @hover="secMenuHover" @hover-end="secMenuHoverEnd" />
</template>

<script setup lang="ts">
import { ref, watch, nextTick } from 'vue';
import SvgIcon from '../SvgIcon.vue';
import PopMenu from './PopMenu.vue';
import { iconMap } from '../../../util/icon/iconMap';
import type { PopMenuItemInterface, PopMenuAttributeInterface } from '.';

const props = defineProps<{
    item: PopMenuItemInterface;
    index: number;
}>();

const emit = defineEmits<{
    (e: 'check', data:{checked:boolean,index: number,multiCheck:boolean} ): void;
}>();
const submenu = ref<PopMenuAttributeInterface>({
    visible: false,
    items: [],
});

const menuItemRef = ref<HTMLElement | null>(null);


const handleClick = () => {
    props.item.click?.();
    if(props.item.checkable??false){
      emit('check', {checked: !props.item.checked, index: props.index, multiCheck: props.item.multiCheck});
      // if(props.item.multiCheck){
      //   props.item.checked = !props.item.checked;
      // }
    }
};


const handleMouseEnter = () => {
    if (props.item.children) {
        submenu.value.visible = true;
    }
};

const handleMouseLeave = () => {
    if (props.item.children) {
        submenu.value.visible = false;
    }
};

const secMenuHover = () => {
    submenu.value.visible = true;
    console.log('secMenuHover', submenu.value.visible);
};

const secMenuHoverEnd = () => {
    submenu.value.visible = false;
    console.log('secMenuHoverEnd', submenu.value.visible);
};

watch(
    () => props.item,
    async (newItem) => {
        await nextTick();
        if (newItem.children) {
            submenu.value = {
                ...newItem.children, visible: false,
                position:
                {
                    x: menuItemRef.value.offsetLeft + menuItemRef.value.offsetWidth - 5,
                    y: menuItemRef.value.offsetTop
                }
            };
        }
    },
    { immediate: true, deep: true }
);

// onMounted(() => {
//     if (props.item.children) {
//         submenu.value = { ...props.item.children, visible: false, position: { x: 1, y: 0 } };
//     }
// });
</script>

<style lang="scss" scoped>
.popmenu-item {
    width: 100%;
    padding: 2px 8px;
    background-color: rgba(255, 255, 255, 0);
    cursor: default;
    gap: 8px;
    //transition: all 0.2s ease-in-out;

    &:hover {
        background-color: var(--pop-item-background-color-hover);
        backdrop-filter: blur(3px);
        border-radius: 5px;
    }

    &:active {
        background-color: var(--pop-item-background-color-active);
        backdrop-filter: blur(5px);
        border-radius: 5px;
    }

    &:hover .popmenu-item-icon {
        animation: heartBeat 2s;
    }

    .content{
        gap: 8px;
    }
}

.text {
    font-size: 14px;
    color: var(--pop-item-text-color);
}
</style>