<template>
  <div class="center-wrapper">
    <div class="svg-icon" ref="svgIcon" :style="iconStyle" @mouseenter="isHover=true" @mouseleave="isHover=false" @click="props.onClick()??''"></div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref,watch } from 'vue'

const props = defineProps<{
  icon: string
  color?: string
  hoverColor?: string
  width?: number
  height?: number,
  onClick?: () => void
}>()

const isHover = ref<boolean>(false);
const svgIcon =ref();
watch(()=> isHover.value, (newVal) => {
  console.log(newVal);
  if (newVal && (props.hoverColor?? false) ) {
    iconStyle.value.backgroundColor = props.hoverColor ?? 'var(--main-fore-color)';
    if(svgIcon.value) {
      svgIcon.value.style.cursor = 'pointer';
    }
  } else {
    iconStyle.value.backgroundColor = props.color ?? 'var(--main-fore-color)';
    if(svgIcon.value) {
      svgIcon.value.style.cursor = 'default';
    }
  }
});

const iconStyle = computed(() => ({
  display: 'inline-block',
  width: `${props.width ?? 32}px`,
  height: `${props.height ?? 32}px`,
  backgroundColor: isHover.value ? props.hoverColor ?? 'var(--main-fore-color)'
      : props.color ?? 'var(--main-fore-color)',
  WebkitMaskImage: `url(${new URL(props.icon, import.meta.url).href})`,
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  WebkitMaskPosition: 'center',
  maskImage: `url(${new URL(props.icon, import.meta.url).href})`,
  maskRepeat: 'no-repeat',
  maskSize: 'contain',
  maskPosition: 'center',
  transition: 'background-color 0.3s ease'
}))
</script>

<style scoped>
.center-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.svg-icon {
  /* 基本样式由 style 对象控制，这里不用额外设置宽高 */
}


</style>
