<!--
author: 程旭
description: 封装了的fluent-ui的Input组件，为了能够使用v-model进行双向绑定
date: 2024-04-01
-->
<template>
  <div>
    <fluent-text-field
      :value="props.modelValue"
      @input="onInput($event)"
      @change="$emit('change', $event)"
      :placeholder="props.placeholder"
      :label="props.label"
      style="width: 100%;"
    />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['change', 'input', 'update:modelValue']);
const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  label: {
    type: String,
    default: '',
  },
});

const onInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit('update:modelValue', inputValue);
  console.log('inputValue', inputValue);
  emit('input', event);
};

// 禁用 console.warn
console.warn = () => {}; // 禁用警告

</script>
