<template>
    <div class="chat-title flex-row-space-between flex-row-align-center">
        <span class="title">{{ props.title }}</span>

        <div class="icon">
            <SvgIcon :icon="iconMap['more']" :width="24" :height="24" color="var(--topbar-icon-color)"
                hoverColor="var(--topbar-icon-color-hover)" :on-click="()=>console.log('app')"/>
        </div>
    </div>
</template>
<script lang="ts" setup>
import { PropType } from 'vue';
import SvgIcon from '../../common/SvgIcon.vue';
import {iconMap} from "../../../util/icon/iconMap";

const props = defineProps({
    title: {
        type: String,
        default: 'Chat Title'
    },
    type: {
        type: String as PropType<'personal' | 'group'>,
        default: 'personal'
    }
});
</script>
<style lang="scss" scoped>
.chat-title {
  margin-top: 20px;
  padding: 10px 15px;
  top:0;
  left: 0;
  position: sticky;
  width: 100%;
  border-bottom: 1px solid var(--border-bottom-color);
}
.title{
  font-size: 18px;
  font-weight: 500;
}
</style>