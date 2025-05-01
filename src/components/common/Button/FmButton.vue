<template>
  <div :class="['fm-button-container',size]" :style="buttonStyle" @mouseenter="isHovering=true" @mouseleave="isHovering=false" @mousedown="isClicking=true" @mouseup="isClicking=false">
    <button :class="['fm-button', type, size]" class="button-main" :style="colorStyle">
      <SvgIcon :icon="icon" :height="iconSize" :width="iconSize" v-if="icon!=''" :color="type=='primary'?'white':'var(--main-fore-color)'"/>
      <slot name="default"></slot>
    </button>
    <span class="tube" :style="colorStyle" v-if="extend">|</span>
    <button :class="['fm-button', size]" v-if="extend" class="button-extend" @click="extendClicked">
      <SvgIcon :icon="iconMap[arrowIconType]" :height="iconSize - 4" :color="type=='primary'?'white':'var(--main-fore-color)'"/>
    </button>
  </div>
  <slot name="extend-menu">
  </slot>
</template>
<script setup lang="ts">
import {computed, PropType, ref} from "vue";
import SvgIcon from "@/components/common/SvgIcon.vue";
import {IconKey, iconMap} from "@/util/icon/iconMap.ts";

const props = defineProps({
  type: {
    type: String as PropType<'primary' | 'default'>,
    default: 'primary'
  },
  icon: {
    type: String,
    default: '',
  },
  size: {
    type: String as PropType<'small' | 'medium' | 'large'>,
    default: 'medium',
  },
  extend: {
    type: Boolean,
    default: false,
  },
  menuPopped: {
    type: Boolean,
    default: false,
  }
})

const emit = defineEmits<{
  (e: 'extendClicked'): void;
}>();

const menuPopped = computed(() => {
  return props.menuPopped;
})

const isHovering = ref(false);
const isClicking = ref(false);
const arrowIconType = computed<IconKey>(() => {
  return menuPopped.value ? 'arrowUp' : 'arrowDown';
});

const iconSize = computed(() => {
  return props.size === 'small' ? 12 : props.size === 'medium' ? 16 : 20;
});

const colorStyle = computed(() => {
  return props.type === 'primary' ? 'color:white' : 'color:var(--main-fore-color)';
});

const buttonStyle = computed(() => {
  if(isHovering.value) {
    if(isClicking.value){
      return buttonClickedNormal.value;
    } else {
      return buttonHoverNormal.value;
    }
  }else {
    return buttonStyleNormal.value;
  }
});
const buttonStyleNormal = computed(() => ({
  backgroundColor: props.type==='primary' ? 'var(--primary-color)': 'var(--default-button-background-color)',
  border: props.type==='primary' ? 'none' : 'var(--default-button-border-color) 1px solid',
  color: props.type === 'primary' ? 'white' : 'var(--main-fore-color)'
}));

const buttonHoverNormal = computed(() => ({
  backgroundColor: props.type==='primary' ? 'var(--primary-color-hover)' : 'var(--default-button-background-color-hover)',
  border: props.type==='primary' ? 'none' : 'var(--default-button-border-color) 1px solid',
  color: props.type === 'primary' ? 'white' : 'var(--main-fore-color)'
}));

const buttonClickedNormal = computed(() => ({
  backgroundColor: props.type==='primary' ? 'var(--primary-color-active)' : 'var(--default-button-background-color-active)',
  border: props.type==='primary' ? 'none' : 'var(--default-button-border-color) 1px solid',
  color: props.type === 'primary' ? 'white' : 'var(--main-fore-color)'
}))

const extendClicked = () => {
  emit('extendClicked');
}

</script>
<style lang="scss" scoped>
.fm-button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: var(--border-radius-size);
  //background-color: var(--primary-color);
  cursor: default;
  transition: 0.1s ease-in-out;

}

.tube{
  font-size: 13px;
  font-weight: lighter;
}

.fm-button {
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0 20px;
}

.small {
  height: 26px;
  --border-radius-size: 3px;
}

.medium{
  height: 30px;
  --border-radius-size:5px;
}

.large{
  height: 38px;
  --border-radius-size:6px;
}

.button-main {
  border-top-left-radius: var(--border-radius-size);
  border-bottom-left-radius: var(--border-radius-size);
}

.button-extend {
  border-top-right-radius: var(--border-radius-size);
  border-bottom-right-radius: var(--border-radius-size);
  padding-right: 0;
  padding-left: 0;
}


</style>