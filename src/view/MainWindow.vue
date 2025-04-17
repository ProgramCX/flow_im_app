<template>
    <div class="mainwindow flex-row-all-start">
      <SideBar />
      <ListView style="flex: 1;" class="listview" />
      <div class="spitter" @mousedown="onStartDrag"></div>
      <ChatView class="chatview" />
    </div>
  </template>
  
  <script setup lang="ts">
  import SideBar from '../components/mainwindow/SideBar.vue';
  import ListView from './mainwindow/ListView.vue';
  import ChatView from './mainwindow/ChatView.vue';
  import { onMounted, onUnmounted, ref } from 'vue';
  import Window from '../electron/window';
  
  const isDragging = ref(false);
  
  const onStartDrag = (event: MouseEvent) => {
    isDragging.value = true;
    event.preventDefault(); 
  };
  
  const onMove = (event: MouseEvent) => {
    if (isDragging.value) {
      const newWidth = event.clientX;
      const listView = document.querySelector('.listview') as HTMLElement;
      const chatView = document.querySelector('.chatview') as HTMLElement;
  
      if (listView && chatView) {
        if(newWidth > (350 + 65) ){
            return;
        }
        listView.style.width = `${newWidth}px`;
        chatView.style.width = `calc(100% - ${newWidth}px)`;
      }
    }
  };
  
  const onUp = () => {
    isDragging.value = false;
  };
  
  onMounted(() => {
    Window.setMinimumSize(800, 600);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  });
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', onMove);
    window.removeEventListener('mouseup', onUp);
  });


  </script>
  
  <style lang="scss" scoped>
  .mainwindow {
    width: 100%;
    height: 100%;
    padding: 0;
    background-color: var(--background-color);
    .spitter {
      width: 3px;
      height: 100vh;

      cursor: ew-resize;
     
    }
  }
  </style>
  