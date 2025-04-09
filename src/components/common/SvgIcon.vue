<template>
    <div class="svg-icon" :style="iconStyle"></div>
  </template>
  
  <script setup lang="ts">
import { watch } from 'vue';

  const props = defineProps<{
    icon: string;
    color?: string;
    hoverColor?: string;
    width?: number;
    height?: number;
    
  }>();
  
  const width = props.width ?? 32;
  const height = props.height ?? 32;
  const color = props.color ?? 'var(--main-fore-color)';
  const hoverColor = props.hoverColor ?? 'var(--main-fore-color)';
  
  const iconStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
    WebkitMaskImage: `url(${props.icon})`,
    WebkitMaskRepeat: 'no-repeat',
    WebkitMaskSize: 'contain',
    maskImage: `url(${props.icon})`,
    maskRepeat: 'no-repeat',
    maskSize: 'contain',
    transition: 'background-color 0.3s ease'
  };

  watch(()=>props,(newProps) => {
    iconStyle.width = `${newProps.width}px`;
    iconStyle.height = `${newProps.height}px`;
    iconStyle.backgroundColor = newProps.color;
    iconStyle.WebkitMaskImage = `url(${new URL(props.icon, import.meta.url).href})`;
    iconStyle.maskImage = `url(${new URL(props.icon, import.meta.url).href})`;
  },{deep:true})
  
  </script>
  
  <style scoped>
  .svg-icon:hover {
    background-color: v-bind(hoverColor);
  }

  </style>
  