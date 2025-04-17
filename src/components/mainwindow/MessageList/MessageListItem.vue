<template>
  <div class="message-list-item flex-row-space-between">
    <div class="avatar-wrapper flex-row-all-center">
      <img :src="props.data.avatarSrc" alt="头像" height="40" width="40" class="avatar" id="avatar"/>
    </div>
    <div class="message-list-item-content">
        <span id="title">{{ props.data.title }}</span>
        <span class="content-message">{{ props.data.lastMessage }}</span>
    </div>
    <div class="message-list-item-right flex-column-justify-center">
      <span id="date">{{ props.data.dateTime }}</span>
      <el-badge :value="props.data.unreadCount??0" :is-dot="props.data.notDisturb" badge-style="height:15px;font-size:10px;display:flex;align-items:center"/>
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  isTop: boolean,
  data: {
    title: string,
    dateTime: string,
    lastMessage: string,
    avatarSrc: string,
    unreadCount?: number,
    queryString: string,
    notDisturb: boolean,
  }
}>()

</script>

<style scoped lang="scss">
.message-list-item {
  *{
    cursor: default;
    user-select: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  height: 80px;
  width: 100%;
  background-color: var(--list-item-background-color);
  padding-right: 10px;
  padding-left: 7px;

  .avatar-wrapper {
    width: 60px;
    height: 100%;
  }

  .message-list-item-content{
    width: 100%;
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    #title{
      font-size: 14px;
      line-height: 25px;
      max-width: 100%;
    }

    .content-message{
      font-size: 12px;
      color: var(--tip-grey-fore-color);
      max-width: 100%;
    }


  }


  .message-list-item-right{
    gap: 8px;
    #date{
      font-size: 10px;
      color: var(--tip-grey-fore-color);
    }
  }
  &:hover {
    background-color: var(--list-item-background-color-hover);
  }

  &:active{
    background-color: var(--list-item-background-color-active);
  }

}

#avatar {
  border-radius: 50%;
}


</style>