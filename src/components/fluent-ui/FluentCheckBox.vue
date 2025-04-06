<!--
author: 程旭
description: 封装了的fluent-ui的CheckBox组件，为了能够使用v-model进行双向绑定
date: 2025-04-06
-->
<template>
  <fluent-checkbox
    :checked="props.modelValue"
    :disabled="props.disabled"
    @change="onInput"
  >
    <slot></slot>
  </fluent-checkbox>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

// 定义 emit 事件
const emit = defineEmits(['change', 'update:modelValue']);

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
});

// 处理 change 事件，更新 v-model
const onInput = (event: Event) => {
  const checkboxValue = (event.target as HTMLInputElement).checked;
  emit('update:modelValue', checkboxValue); // 更新 v-model
  emit('change', checkboxValue); // 触发 change 事件
};

// 禁用 console.warn 和 console.error
console.warn = () => {}; // 禁用警告
console.error = () => {}; // 禁用错误

</script>
