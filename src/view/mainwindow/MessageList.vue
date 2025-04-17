<template>
  <div class="message-list">
    <MessageListItem :is-top="item.isTop" :data="item" v-for="(item, index) in listData" :key="index" />
  </div>

</template>

<script setup lang="ts">
import MessageListItem from "@/components/mainwindow/MessageList/MessageListItem.vue";
import { ref } from "vue";
const data = ref({
  title: "程旭大帅哥大帅哥大帅哥啊啊啊",
  dateTime: "2024/1/1",
  lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
  avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
  unreadCount: 1,
  queryString: "jsfai4a5ewf",
  notDisturb: false,
});

const listData = ref([
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage:
 "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },
  {
    title: "程旭大帅哥大帅哥大帅哥啊啊啊",
    dateTime: "2024/1/1",
    lastMessage: "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
    avatarSrc: "https://www.programcx.cn/img/avatar_hu1650936153326096863.png",
    unreadCount: 1,
    queryString: "jsfai4a5ewf",
    notDisturb: false,
  },

]);
</script>

<style scoped lang="scss">
.message-list{
  overflow-y: scroll;
  max-height: calc(100vh - 65px);
}

</style>