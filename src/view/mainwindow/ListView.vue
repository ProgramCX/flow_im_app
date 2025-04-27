<template>
  <div class="list-view">
    <div class="top flex-row-space-between">
      <InputSearch v-model="searchValue" @change="searchValueChanged" style="flex:1" placeholder="搜索"/>
      <div class="button-add flex-row-all-center">
        <SvgIcon :icon="iconMap['add']" :width="12" :height="12" color="var(--inputbox-placeholder-color)"/>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script setup lang="ts">
import InputSearch from "@/components/common/InputBox/InputSearch.vue";
import {ref} from "vue";
import SvgIcon from "@/components/common/SvgIcon.vue";
import {iconMap} from "@/util/icon/iconMap.ts";
const searchValue = ref("");

const searchValueChanged = (value: string) => {
  console.log(value);
}

</script>
<style lang="scss" scoped>
.list-view {
  padding-top: 23px;
  min-width: 250px;
  max-width: 350px;
  width: 350px;
  min-height: 100vh;
  height: 100%;
  background-color: var(--mv-list-background-color);
  .feature-bar{
    margin-top: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }
  .top{
    padding-left:15px;
    padding-right:15px;
    gap:8px;
    margin-bottom: 10px;
  }

}

.button-add{
  background-color: var(--inputbox-background-color);
  width:30px ;
  height:30px ;
  border-radius: 5px;

  &:hover{
    background-color: var(--grey-button-background-color);
    transition: background-color 200ms ease-in-out;
  }

  &:active{
    background-color: var(--grey-button-background-color-active);
  }

}
</style>