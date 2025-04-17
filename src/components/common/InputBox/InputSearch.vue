<template>

    <div class="input-item">
      <SvgIcon :icon="iconMap['search']" :width="18" :height="18" color="var(--inputbox-placeholder-color)"/>
      <input :value="props.modelValue" @input="onInput($event)" @change="$emit('change', $event)"
             :placeholder="props.placeholder"  class="input-item-input" ref="inputSearch"/>
      <SvgIcon :icon="iconMap['close']" :width="15" :height="15" color="var(--inputbox-placeholder-color)"
               hover-color="var(--inputbox-background-color-hover)"
                :onClick="clear" v-if="props.modelValue!=''"/>
    </div>

</template>

<script setup lang="ts">
import SvgIcon from "../SvgIcon.vue";
import { iconMap } from '@/util/icon/iconMap.ts'
import {ref} from "vue";
const props = defineProps({
  placeholder: {
    type: String,
    default: 'search',
  },
  modelValue: {
    type: String,
    required: true,
  }
});

const emit = defineEmits(['change', 'input', 'update:modelValue']);
const inputSearch = ref<HTMLElement | null>(null);
const onInput = (event: Event) => {
  const inputValue = (event.target as HTMLInputElement).value;
  emit('update:modelValue', inputValue);
  console.log('inputValue', inputValue);
  emit('input', event);
};

const clear = ()=> {
  if(inputSearch.value) {
    (inputSearch.value as HTMLInputElement).value = '';
    emit('update:modelValue', '');
  }

}
</script>

<style scoped lang="scss">

  .input-item {
    height: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;
    padding: 0 5px;
    gap: 10px;

    //文本框样式
    border-radius: 5px;
    background-color: var( --inputbox-background-color);

    input{
      background-color: transparent;
      width: 100%;
      height: 30px;
      outline: none;
      border: none;

      &::placeholder {
        color: var( --inputbox-placeholder-color );
      }

    }
  }


</style>
<style>
.input-item:has(input:focus) {
  border: var( --inputbox-border-color-active ) solid 1px;
}
</style>