<template>
    <div class="nav-bar" :style="{ gap: props.uStyle?.gap || '10px' }">
        <div v-for="(item, index) in props.items" v-key="item" class="nav-bar-item-container flex-column-justify-center"
            :key="index" :class="{ 'nav-bar-item-active': item.isTab && tabState[index] }">
            <SvgIcon :icon="item.isTab && tabState[index] ? iconMap[item.activeIcon] : iconMap[item.icon]" class="nav-bar-item"
                @click="navBarClicked(index)" :width="24" :height="24"
                :color="item.isTab && tabState[index] ? 'var(--nav-icon-color-active)' : 'var(--nav-icon-color)'"
                hover-color="var(--nav-icon-color)" />
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import Window from "../../electron/window";
import SvgIcon from "../common/SvgIcon.vue";
import { iconMap, type IconKey } from '../../util/icon/iconMap';

export interface NavBarItem {
    icon: IconKey;
    activeIcon: IconKey;
    routeName?: string;
    route?: string;
    isTab: boolean;
    width?: number | undefined;
    height?: number | undefined;
    default?: boolean | undefined;
}

interface NavBarStyle {
    gap?: string;
}

const router = useRouter();


const props = defineProps<{
    items: NavBarItem[];
    uStyle ?: NavBarStyle;
}>();

const tabState = ref<Boolean[]>([]);

const navBarClicked = (index: number) => {
    const clickedItem = props.items[index];
    if (clickedItem.isTab) {
        if (clickedItem) {
            router.push({ name: clickedItem.routeName });
        } else {
            router.push({ path: clickedItem.route });
        }

        //切换tab状态
        tabState.value = tabState.value.map((_item, i) => {
            return i === index;
        });
    } else {
        Window.createNewWindow(clickedItem.route ?? '', clickedItem.width, clickedItem.height);
    }



}

onMounted(() => {
    tabState.value = props.items.map((item) => item.default);
});
</script>
<style lang="scss" scoped>
.nav-bar {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    &>.nav-bar-item-container {
        cursor: default;
        transition: all 0.2s ease-in-out;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 7px;
        &:hover {
            background-color: var(--dim8-background-color);
        }
    }
}

.nav-bar-item-active {
    background-color: var(--dim7-background-color) !important;
}
</style>