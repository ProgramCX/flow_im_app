<!--
author: 程旭
description: 主窗口的侧边栏
date: 2025-04-07
-->
<template>
    <div class="sidebar" style="width: 60px;">
        <div class="sidebar-content flex-column-space-between">
            <div class="left flex-column">
                <h3 style="color: white;">FM</h3>
                <img src="../../assets/png/avatar.png.jpg" alt="logo" class="logo" width="35"/>
                <NavBar :items="navData" />
            </div>
            <div class="right flex-column">
               <NavBar :items="bottomNavData" style="margin-bottom: 15px;" :u-style="{gap:'6px'}"/>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import NavBar from './NavBar.vue';
import { NavBarItem } from './NavBar.vue';
import { ref } from 'vue';

 const navData = ref<NavBarItem[]>([
    {
        icon: 'message',
        activeIcon: 'messageActive',
        routeName: 'messagelist',
        isTab: true,
        default: true
    },
    {
        icon: 'contact',
        activeIcon: 'contactActive',
        routeName: 'contactlist',
        isTab: true,
    }
 ])

 const bottomNavData = ref<NavBarItem[]>([
    {
        icon: 'setting',
        activeIcon: 'setting',
        routeName: 'setting',
        isTab: false,
    },
    {
        icon: 'collection',
        activeIcon: 'collection',
        routeName: 'collection',
        isTab: false,
    },
    {
        icon: 'folder',
        activeIcon: 'folder',
        routeName: 'folder',
        isTab: false,
    },
    {
        icon: 'menu',
        activeIcon: 'menu',
        routeName: 'menu',
        isTab: false,
    }
    
 ])

</script>
<style lang="scss" scoped>
.sidebar{
    width: 60px;
    height: 100vh;
    top: 0;
    left: 0;
    position: sticky;
    background-color: var(--sidebar-background-color);
}

.sidebar-content{
    width: 100%;
    height: 100%;
    padding: 0 10px;
    .left,.right{
        gap: 10px;
        .logo{
           border-radius: 50% 50%;
           margin-bottom: 8px;
        }
    }
}
</style>