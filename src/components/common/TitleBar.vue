<template>
    <div class="title-bar flex-row-space-between">
        <div class="title-bar-left">
            <slot name="left">
            </slot>
        </div>
        <div class="title-bar-center">
            <slot name="center"> </slot>
        </div>
        <div class="title-bar-right">
            <slot name="right">
                <div class="window-controller flex-row-all-start">
                    <div class="button-wrapper flex-row-all-center" @click="Window.minimizeWindow()">
                        <SvgIcon :icon="iconMap['minimize']" :width="14" :height="14" color="var(--main-fore-color)"
                            hoverColor="var(--main-fore-color)" />
                    </div>
                    <div class="button-wrapper flex-row-all-center" @click="Window.maximizeWindow()">
                        <SvgIcon :icon="iconMap['max']" :width="14" :height="14" color="var(--main-fore-color)"
                            hoverColor="var(--main-fore-color)" />
                    </div>
                    <div class="close-mapper button-wrapper flex-row-all-center" @click="Window.closeWindow()">
                        <SvgIcon :icon="iconMap['close']" :width="14" :height="14" color="var(--main-fore-color)"
                            hoverColor="var(--main-fore-color)" />
                    </div>
                </div>
            </slot>
        </div>
    </div>
</template>
<script setup lang="ts">
import SvgIcon from './SvgIcon.vue';
import { iconMap } from '@/util/icon/iconMap.ts';
import Window from '../../electron/window';
</script>
<style lang="scss" scoped>
*{
    -webkit-app-drag: no-drag;
}
.title-bar {
    -webkit-app-region: drag; 
    background: transparent;
    height: 25px;
    top: 0;
    left: 0;
    width: 100%;
    position: fixed;
    .title-bar-right {
        height: 100%;

        slot {
            height: 100%;
        }
    }
}

.window-controller {
    -webkit-app-region: no-drag;
    gap: 0px;
}

.button-wrapper {
    -webkit-app-region: no-drag;
    width: 30px;
    height: 25px;
    transition: all 0.3s ease;

    &:hover {
        background-color: var(--dim5-background-color);
    }

    &.active {
        background-color: var(--dim9-background-color);
    }
}
.close-mapper {
    -webkit-app-region: no-drag;
        &:hover {
            background-color: #ba0505;
            border-top-right-radius: 10px;
        }

        &.active {
            background-color: #890202;
        }
    }
</style>
