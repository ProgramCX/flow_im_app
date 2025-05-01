<template>
    <div class="chat-view" v-if="!isBlank">
      <ChatTitle title="Chat Title" type="personal"/>
      <ChatContent/>
      <ChatInput/>
    </div>
    <div class="chat-body" v-else></div>
</template>
<script setup lang="ts">
import { ref} from 'vue';
import ChatTitle from "@/components/mainwindow/ChatView/ChatTitle.vue";
import ChatContent from "@/components/mainwindow/ChatView/ChatContent.vue";
import ChatInput from "@/components/mainwindow/ChatView/ChatInput.vue";
const isBlank = ref<boolean>(false);
</script>
<style lang="scss" scoped>
.chat-view{
    min-height: 100vh;
    width: 100%;
    height: 100%;
    background: var(--bar-gradient-color); 
    display: flex;
    flex-direction: column;
    justify-content: space-between;

}
</style>