<template>
  <div class="message-list">
    <MessageListItem :is-top="item.isTop" :data="item" v-for="(item, index) in listData" :key="index" />
  </div>

</template>

<script setup lang="ts">
import MessageListItem from "@/components/mainwindow/MessageList/MessageListItem.vue";
import { ref } from "vue";


const listData = ref([
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 100,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
    isTop: false,
  },
  {
    title: "步枪抽靶狙打近战",
    dateTime: "13:45",
    lastMessage: "[动画表情]",
    avatarSrc: "https://assets.programcx.cn/ljx.jpg",
    unreadCount: 0,
    queryString: "jsfai4a5ewf",
    notDisturb: true,
    isTop: false,
  }
]);
</script>

<style scoped lang="scss">
.message-list{
  overflow-y: hidden;
  max-height: calc(100vh - 65px);
  padding-right: 6px;

}

.message-list:hover{
  overflow-y:  scroll;
  padding-right: 0;
}


</style>