<template>
  <div class="chat-input flex-column-space-between" ref="fmButtonRef">
    <div class="feature-options flex-row">
      <SvgIcon :icon="iconMap['expression']" :height="24" :width="24" hover-color="var(--topbar-icon-color-hover)" :on-click="()=>console.log('app')"/>
      <SvgIcon :icon="iconMap['screenshot']" :height="24" :width="24" hover-color="var(--topbar-icon-color-hover)"/>
      <SvgIcon :icon="iconMap['image']" :height="24" :width="24" hover-color="var(--topbar-icon-color-hover)"/>
      <SvgIcon :icon="iconMap['folder']" :height="24" :width="24" hover-color="var(--topbar-icon-color-hover)"/>
      <SvgIcon :icon="iconMap['microphone']" :height="24" :width="24" hover-color="var(--topbar-icon-color-hover)"/>
    </div>
    <div class="input-area">
      <textarea  placeholder="Type a message..." class="input-field"/>
    </div>
    <div class="button-area">
<!--      <fluent-button appearance="accent" class="send-button">发送</fluent-button>-->
      <FmButton type="primary" extend @extend-clicked="extendClicked" :menu-popped="popMenuAttribute.visible">发送
        <template #extend-menu>
          <PopMenu :attribute="popMenuAttribute" @close="popMenuAttribute.visible=false" ref="popMenuRef" @check="handleCheck" />
        </template>
      </FmButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";
import {iconMap} from "@/util/icon/iconMap.ts";
import SvgIcon from "@/components/common/SvgIcon.vue";
import FmButton from "@/components/common/Button/FmButton.vue";
import PopMenu from "@/components/common/PopMenu/PopMenu.vue";
import {PopMenuAttributeInterface} from "@/components/common/PopMenu";

const popMenuAttribute = ref<PopMenuAttributeInterface>({
  visible: false,
  items: [
    {
      name: "按下 Ctrl + Enter 发送",
      click: () => {
        console.log('Send');
      },
      checked: true,
      checkable: true,
      multiCheck: false
    },
    {
      name: "按下 Enter 发送",
      click: () => {
        console.log('Send');
      },
      checked: false,
      checkable: true,
      multiCheck: false
    }
  ],
  autoPositioning: true
});

const fmButtonRef = ref<HTMLElement | null>(null);
const popMenuRef = ref<HTMLElement | null>(null);

const extendClicked = () => {
  popMenuAttribute.value.visible = !popMenuAttribute.value.visible;
  console.log('extendClicked', popMenuAttribute.value.visible);
};

const handleCheck =(message)=>{
  console.log(message);
}
</script>
<style scoped lang="scss">
  .chat-input{
    height: 200px;
    display: flex;
    flex-direction: column;
    background: var(--bar-gradient-color);
    padding: 8px 15px;
    gap:5px;

    .feature-options{
      width: 100%;
      gap: 18px;
    }

    .input-area {
      width: 100%;
      height: calc(100% - 20px);
      flex: 1;
      display: flex;
      .input-field {
        width: 100%;
        height: calc(100% - 20px);
        border: none;
        background: transparent;
        resize: none;
        font-family: "Microsoft YaHei", "PingFang SC", "Helvetica", "Arial", sans-serif;
        &:focus {
          outline: none;
        }
      }
    }


    .button-area{
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-right: 10px;
      padding-bottom: 8px;
    }

  }
</style>